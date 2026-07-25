import * as authService from "./authservice.js";

export const registercontroller = async (req, res, next) => {
  try {
    const result = await authService.registeruser(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

export const logincontroller = async (req, res, next) => {
  try {
    const result = await authService.loginuser(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};