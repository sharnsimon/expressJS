module.exports=(sequelize,DataTypes) =>{
    const Model = sequelize.define('country',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }},
            
    {
        tableName:"country",
        timestamps : true,
        paronoid : true,
        underscored : false,
    });    
    Model.associate= function(models){
        this.address=this.hasMany(models.address);
    };
    return Model;
}  