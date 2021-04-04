
module.exports = mongoose => {
    const suContact = mongoose.model(
      "supportcontact",
      mongoose.Schema(
        {
          contactName: String,
          factoryName: String,
          email: String,
          phone: String,
          category: String,
          message: String
        },
        { timestamps: true }
      )
    );
  
    return suContact;
  };