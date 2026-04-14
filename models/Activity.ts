import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  action: { type: String, required: true },
  details: { type: String, required: true },
  time: { type: String, required: true },
  icon: { type: String, required: true }, // Store string name (e.g., 'UserPlus')
  color: { type: String, required: true },
  bg: { type: String, required: true },
}, { timestamps: true });

// We use the time field as a display string for now (e.g. "Just now" or "2 hours ago"), 
// but we sort by true createdAt timestamps.
export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
