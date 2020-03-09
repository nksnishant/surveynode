const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('ceo', 'root', '', {
    dialect: 'mysql',
    dialectOptions: {connectTimeout: 1000} // mariadb connector option
});

class Result extends Model{}
Result.init({
    sector: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    org: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Phone number address already in use!'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    orgLevel: {
        type: DataTypes.ENUM("CFO", ),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Result'
});

sequelize.sync();

module.exports = Result;