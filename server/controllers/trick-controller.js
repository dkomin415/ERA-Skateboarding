import models from '../models/index.js';

const { Trick } = models;

const trickController = {
    // get all tricks
    getAllTricks(req, res) {
        Trick.find({})
            .then(dbTrickData => res.json(dbTrickData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    },
    // get one trick
    getTrickById({ params }, res) {
        Trick.findOne({ _id: params.id })
            .then(dbTrickData => {
                // if no trick is found, send 404
                if (!dbTrickData) {
                    res.status(404).json({ message: 'No Trick with that id' });
                    return;
                }
                // if it is found
                res.json(dbTrickData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    },
    // create trick
    createTrick({ body }, res) {
        Trick.create(body)
            .then(dbTrickData => res.json(dbTrickData))
            .catch(err => res.status(400).json(err));
    },
    // update trick
    updateTrick({ params, body }, res) {
        Trick.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbTrickData => {
                if (!dbTrickData) {
                    res.status(404).json({ message: 'No Trick with that id' });
                }
                res.json(dbTrickData);
            })
            .catch(err => res.status(400).json(err));
    },
    // delete trick
    deleteTrick({ params }, res){
        Trick.findOneAndDelete({ _id: params.id })
            .then(dbTrickData => {
                if (!dbTrickData) {
                    res.status(404).json({ message: 'No Trick found with that id'});
                    return;
                }
                res.json(dbTrickData);
            })
            .catch(err => res.status(400).json(err));
    }
}

export default trickController;