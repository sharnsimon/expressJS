module.exports=(sequelize,DataTypes) =>{
    const Model = sequelize.define('student',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false

        },
        departmentId:{
            type:DataTypes.INTEGER,
            allowNull:false
            

        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }},
            
    
    
    {
        tableName:"student",
        timestamps : true,
        paronoid : true,
        underscored : false,
    });

    Model.associate= function(models){

        this.address=this.hasMany(models.address)
        this.departmentId=this.belongsTo(models.department)
    };
    return Model;
}   
