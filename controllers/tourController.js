const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    res.status(400).json({ status: 'failed', message: 'Invalid Id' });
  }
};
exports.getTour = (req, res) => {
  res.status(200).json({ status: 'success', data: { tours: tours } });
};
exports.postTour = (req, res) => {
  console.log(req.body);
  const newTourId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newTourId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
exports.getSingleTour = (req, res) => {
  const tour = tours.find((tour) => tour.id === Number(req.params.id));

  res.status(200).json({ status: 'success', data: { tour } });
};
exports.updateTour = (req, res) => {
  const tour = tours.find((tour) => tour.id === Number(req.params.id));

  res.status(200).json({ status: 'success', data: 'updated successful' });
};
exports.deleteTour = (req, res) => {
  const tour = tours.find((tour) => tour.id === Number(req.params.id));

  res.status(200).json({ status: 'success', data: {} });
};
