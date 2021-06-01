const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define("Patients", {
    patient_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fullname: DataTypes.STRING(50),
  },
  { timestamps: false, tableName: 'Patients', });
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plans,
      { foreignKey: 'plan_id', as: 'plans' })
  };
  return Patient;
};

module.exports = Patient;