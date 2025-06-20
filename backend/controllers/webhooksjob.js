import { Webhook } from "svix";

import UserJob from "../models/UserJob";

// API Controller Function to Manage clerk user with database

export const clerkWebhooks = async (req, res) => {
  try {
    // create a svix instance with cleark webhook secret

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    //verifyin Headers

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    //Gettin Data from request body

    const { data, type } = req.body;

    //Switch cases for different Events

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await UserJob.create(userData);
        res.json({});
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await UserJob.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }

      case "user.deleted": {
        await UserJob.findByIdAndDelete(data.id);
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {

    console.log(error.message);
    res.json({success:false,message:'Webhooks Error'})
  }
};
