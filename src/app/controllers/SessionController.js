import * as Yup from 'yup';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(401)
                .json({ error: 'Erro na validação de dados' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(401).json({ error: 'Usuário não encontrado' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha não correspondente' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            /**
             * o segundo será uma string unica, essa senha poderá ser gerada no  md5online
             * onde a senha criptografada será fastfeet1.0
             */
            token: user.generateToken(),
        });
    }
}

export default new SessionController();
