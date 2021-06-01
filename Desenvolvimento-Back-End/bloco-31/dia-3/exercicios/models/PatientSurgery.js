module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define('PatientsSurgeries',
    {},
    { timestamps: false, tableName: 'Patient_surgeries' },
  );
  PatientSurgery.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };
  return PatientSurgery;
};