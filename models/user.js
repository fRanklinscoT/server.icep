import { sequelize, DataTypes } from './config.js';
import bcrypt from "bcrypt";

// Citizen user
const Citizen = sequelize.define('citizen', {
    citizen_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  // auto-generate UUID
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    locationAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
    paranoid: true 
});

// Admin user
const Admin = sequelize.define('admin', {
    admin_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
    paranoid: true
});

// Municipal personnel user
const MunicipalPersonnel = sequelize.define('municipalPersonnel', {
    municipality_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true
});

const hashPassword = async (user) => {
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
    }
};

Citizen.beforeCreate(hashPassword);
Admin.beforeCreate(hashPassword);
MunicipalPersonnel.beforeCreate(hashPassword);

export { 
    Citizen,
    Admin,
    MunicipalPersonnel,
    sequelize
};

