const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define("Plans", {
    plan_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    coverage: DataTypes.STRING(45),
    price: DataTypes.DECIMAL(10,2),
  },
  {
    timestamps: false,
    tableName: 'Plans',
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patients, {
      foreignKey: 'patient_id', as: 'patients' 
    });
  };
  return Plan;
};
module.exports = Plan;