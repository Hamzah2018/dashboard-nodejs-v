const mongoose = require('./index');

const courseSchema = new mongoose.Schema({
  skills_name: { type: String, required: true },
  // progress_percent: { type: Number, required: true },
  skill_descrip:{type:String, required:true},
  is_active: { type: Number, default: 1 },
  addedAt: { type: Date, default: Date.now },
});

const Skills = mongoose.model('Skills', skillsSchema);

// selec are active
const selectSkills = () => Skills.find({ is_active: 1 });

// insert
const insertSkill = (skill_info) => {
  const { skills_name, skill_descrip } = skill_info;
  return Skills.insertMany([{ title, progress_percent }]);
};
// title , progress_percent
// update
const updateSkill = (skill_info) => {
  const { skill_id, skills_name, skill_descrip } = skill_info;
  return Skills.updateOne({ _id: skill_id }, { title, progress_percent });
};

// delete
const deleteSkill = (skill_info) => {
  const { skill_id } = skill_info;
  return Skills.deleteOne({ _id: skill_id }, { is_active: 0 });
};

module.exports = { selectSkills, insertSkill, updateSkill, deleteSkill };
