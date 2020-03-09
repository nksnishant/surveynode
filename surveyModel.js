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
            type: DataTypes.STRING,
            allowNull: false
        },
        employees: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interests: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priorities:{
            type: DataTypes.STRING,
            allowNull: false
        },
        transformation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        factors: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aspects: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preparedness: {
            type: DataTypes.STRING,
            allowNull: false
        },
        competencies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        financeSkills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skillGaps: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};
