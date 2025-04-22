import mongoose, { Document, Schema } from 'mongoose';

/**
 * Interface for Todo document
 * Extends the base Document type from Mongoose
 */
export interface ITodo extends Document {
  text: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * Mongoose schema for Todo items
 * Defines the structure and validation rules for Todo documents
 */
const TodoSchema: Schema = new Schema({
  text: {
    type: String,
    required: [true, 'Todo text is required'],
    trim: true,
    maxlength: [200, 'Todo text cannot be more than 200 characters']
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Todo model
export default mongoose.model<ITodo>('Todo', TodoSchema); 