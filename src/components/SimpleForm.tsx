import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavBarComp from "./NavBarComp";

// interface FormDataProps {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

const SimpleForm = () => {
  /*
    from React 19 you can simply use action attribute to submit form data 
    to the server without any page reload or reset React will take care of all the 
    default part that we need to do in previous versions.you no longer need to provide 
    a 'method' prop to the form as well.In the Old way, you need to use 'UseState' of React and
    use 'value', 'onChange' props of the input fields and manage form actions and data.
    This whole setup is called control componets.
    you can refer the prevously use methods in the commented handleSubmit function.

    const [formData, setFormData] = useState<FormDataProps>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      //you can also use inbuild methods to get form data using the given name attributes
      //   const formElement = e.currentTarget as HTMLFormElement;
      //   const formData = new FormData(formElement);
      //   const name = formData.get("name");
      //   formElement.reset();// reset form after submission

      console.log("Form Submitted:", formData);
      // Here you would typically send the data to a server
      alert(
        "Form submitted! Check the console for the data.\nForm Data: " +
          JSON.stringify(formData)
      );
      // reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    };
 */

  //use Zod library for form validations
  const handleSubmit = (formData: FormData) => {
    // Use .getAll() for fields that can have multiple values
    const newsLetterChoices = formData.getAll("newsLetter");
    console.log("Newsletter Choices:", newsLetterChoices);

    // This will show all form data, but only the LAST checkbox value for "newsLetter"
    const data = Object.fromEntries(formData);
    console.log("All Form Data (with single checkbox value):", formData);

    const allData = {
      ...data,
      newsLetter: newsLetterChoices,
    };

    alert(
      `Form submitted! Check the console for the data.\nForm Data:${JSON.stringify(
        allData
      )}`
    );
  };

  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <NavBarComp
        navBarProps={{
          imageSrc: "react.svg",
          title: "React 19 Form",
          containerClass: "bg-gray-800 text-white",
        }}
      />
      <div className="bg-gray-900 text-white p-10 flex flex-1 items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8">
              we would love to hear from you! Whether you have a question,
              feedback, or just want to say hello, feel free to reach out using
              the form below or through our contact details.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-3" />
                <span>123 Address Road, City</span>
              </div>
            </div>
          </div>
          <div>
            <form action={handleSubmit}>
              <label htmlFor="name" className="block mb-6">
                <span className="block text-sm font-medium mb-2">
                  Full Name
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  //   value={formData.name}
                  //   onChange={handleChange}
                  className="block w-full 
                                    p-3 rounded bg-gray-800 border border-gray-700"
                  placeholder="Chamith Dilshan"
                  //defaultValue="Chamith Dilshan"
                />
              </label>
              <label htmlFor="email" className="block mb-6">
                <span className="block text-sm font-medium mb-2">
                  Email Address
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                  className="block w-full p-3 rounded bg-gray-800 
                                    border border-gray-700"
                  placeholder="chamith@example.com"
                  //defaultValue="chamith@example.com"
                />
              </label>
              <label htmlFor="phone" className="block mb-6">
                <span className="block text-sm font-medium mb-2">
                  Phone Number
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  //   value={formData.phone}
                  //   onChange={handleChange}
                  className="block w-full p-3 rounded bg-gray-800 
                                    border border-gray-700"
                  placeholder="+123 456 7890"
                  //defaultValue="+123 456 7890"
                />
              </label>
              <label htmlFor="message" className="block mb-6">
                <span className="block text-sm font-medium mb-2">Message</span>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  //   value={formData.message}
                  //   onChange={handleChange}
                  className="block w-full p-3 rounded bg-gray-800 
                                    border border-gray-700"
                  placeholder="Your message..."
                  //defaultValue="This is my Message"
                ></textarea>
              </label>
              {/* Radio buttons */}
              <fieldset className="mb-6 space-y-2">
                <legend className="block text-sm font-medium mb-2">
                  Preferred Contact Method
                </legend>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    defaultChecked={true}
                    value="email"
                    className="w-4 h-4 accent-green-600"
                  />
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="w-4 h-4 accent-green-600"
                  />
                  Phone
                </label>
              </fieldset>
              {/* Check Boxes */}
              <fieldset className="mb-6 space-y-2">
                <legend className="block text-sm font-medium mb-2">
                  Newsletter Preferences
                </legend>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsLetter"
                    value="subscribe"
                    className="w-4 h-4 accent-green-600 rounded"
                  />
                  Subscribe to our newsletter
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsLetter"
                    value="doNotContact"
                    className="w-4 h-4 accent-green-600 rounded"
                  />
                  Do not contact me
                </label>
              </fieldset>

              {/* dropdown */}
              <label htmlFor="inquiry" className="block mb-6">
                <span className="block text-sm font-medium mb-2">
                  Inquiry Type
                </span>
                <select
                  id="inquiry"
                  name="inquiry"
                  className="block w-full p-3 rounded bg-gray-800 border border-gray-700"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    -- Choose a Inquiry Type --
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="sales">Sales Question</option>
                </select>
              </label>
              <button
                type="submit"
                className="px-6 py-3 bg-green-600
                             hover:bg-green-700 rounded text-white"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleForm;
