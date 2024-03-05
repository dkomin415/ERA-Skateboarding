import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TrickSchema = new Schema(
    {
        name: {
            type: String,
        },
        stance: [{
                type: Schema.Types.ObjectId,
                ref: 'stance'
            }],
        bodyVarial: [{
                type: Schema.Types.ObjectId,
                ref: 'bodyVarial'
            }],
        boardRotation: [{
                type: Schema.Types.ObjectId,
                ref: 'boardRotation'
            }],
        flip: [{
                type: Schema.Types.ObjectId,
                ref: 'flips'
            }],
        difficulty: {
            type: Number
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);

// create the Trick model using Trick
const Trick = model('Trick', TrickSchema);

export default Trick;