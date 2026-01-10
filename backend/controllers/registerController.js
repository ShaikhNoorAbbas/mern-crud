export const registerRead = (req, res) => {
  res.status(200).json({
    message: "GET Request",
  });
};

export const registerCreate = (req, res) => {
  res.status(200).json({
    message: "POST Request",
  });
};

export const registerUpdate = (req, res) => {
  res.status(200).json({
    message: "PUT Request",
  });
};

export const registerDelete = (req, res) => {
  res.status(200).json({
    message: "Delete Request",
  });
};
