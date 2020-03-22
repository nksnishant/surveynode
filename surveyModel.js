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
            values: ['CFO', 'CHRO or Senior HR Professional', 'Senior Finance Professional(Finance Head,VP,Director and above)'],
            allowNull: false
        },
        turnover: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        employees: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        interests: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        priorities:{
            type: DataTypes.BLOB,
            allowNull: false
        },
        transformation: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        factors: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        aspects: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        preparedness: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        competencies: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        financeSkills: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        skillGaps: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    })
};
