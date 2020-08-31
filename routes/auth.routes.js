const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/register',
    [
        check('email', 'Введён некорректный email').isEmail(),
        check('password', 'Длинна пароля меньше 4-х символов').isLength({
            min: 4
        })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Некоректные данные при регистрации',
                errors: errors.array()
            })
        }
        const {email, password} = req.body
        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже' +
                    ' существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 14)
        const user = new User({ email, password: hashedPassword})
        await user.save()

        res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

})

router.post('/login',
    [
        check('email', 'Введите правильный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Некоректные данные при регистрации',
                errors: errors.array()
            })
        }
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h'}
        )

        res.json({ token, userId: user.id})
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

})

module.exports = router
