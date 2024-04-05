import { Button, Card, Input, Textarea } from "@material-tailwind/react";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fkxtbn",
        "template_dp6pjq7",
        form.current,
        "CTcv9pyzlyFDSQKgH"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" py-5">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className=" fontPop text-3xl font-semibold text-[#009975]">
          Contact Me
        </h1>
        <p className=" fontPop text-xl">I would love to hear from you!</p>
      </div>
      <div className=" w-full flex justify-center items-center">
        <Card
          data-aos="fade-up"
          data-aos-duration="1000"
          color="transparent"
          shadow={false}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6 fontPop">
              <Input name="user_name" type="text" size="lg" label="Name" />
              <Input name="user_email" type="email" size="lg" label="Email" />

              <Textarea
                type="text"
                name="message"
                size="lg"
                placeholder="Message"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <Button
              type="submit"
              value="Send"
              color="blue"
              variant="outlined"
              className="mt-6"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contract;
