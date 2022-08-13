import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

const db = async (req: Request, res: Response) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        // Find and get all notes
        const notes = await Note.find({});
        res.status(200).json({
          success: true,
          data: notes,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
