module.exports = function(sequelize, DataTypes){
    return sequelize.define('Result', {
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
            type: DataTypes.ENUM,
            values: ['CFO'],
            allowNull: false
        }
    })
};
