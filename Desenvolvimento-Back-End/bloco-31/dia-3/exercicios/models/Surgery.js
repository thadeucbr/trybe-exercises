const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define("Surgeries", {
    surgery_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    specialty: DataTypes.STRING(50),
    doctor: DataTypes.STRING(50),
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
  }
  );
  return Surgery;
};
module.exports = Surgery;