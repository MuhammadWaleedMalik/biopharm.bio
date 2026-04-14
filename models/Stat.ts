import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: String, required: true },
  trend: { type: String, enum: ['up', 'down'], required: true },
  icon: { type: String, required: true }, // Store string name (e.g., 'CreditCard')
}, { timestamps: true });

export default mongoose.models.Stat || mongoose.model('Stat', StatSchema);
