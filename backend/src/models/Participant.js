import { Schema, model } from 'mongoose';

const participantSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    referralSource: {
      type: String,
      enum: ['socials', 'friends', 'myself'],
      required: true
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);

export const Participant = model('Participant', participantSchema);
