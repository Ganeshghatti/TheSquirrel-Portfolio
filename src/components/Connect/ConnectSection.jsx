import React from 'react';
import Arrow from '../../assets/arrow.svg'
import { useForm } from 'react-hook-form';
export default function ConnectSection() {
  return (
    <section
      id="contact"
      className=" pt-[50px]  w-full flex flex-col items-center justify-center overflow-hidden "
    >
      <Title />
      <Box />
      <Footer />
      <Banner/>
    </section>
  );
}

function Title() {
  return (
    <div className=" flex flex-col  w-[95%]">
      <div className=" self-start pb-20 w-1/2 flex flex-col justify-center">
      <div className="flex  md:pr-32 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black">
          <span>LET'S</span>
          <span>CONNECT</span>
        </div>
      </div>
    </div>
  );
}

const Box = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      contactNumber: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const inputBaseClasses = "outline-none border-b pb-4 hover:border-black hover:placeholder-black transition-all duration-500 ease-in-out text-4xl font-light";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <form 
      id='form'
      className="flex flex-col gap-10 md:gap-14 bg-white rounded-[50px] p-8 md:p-12 lg:p-16 w-[95%] md:w-[95%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="w-full max-w-[700px] text-3xl md:text-5xl lg:text-6xl font-black tracking-wide text-black">
        Your Next Big Leap Starts Here.
      </h1>
      
      <div className="w-full max-w-[700px] text-black">
        <div className="flex flex-col text-xl md:text-4xl font-light gap-4">
          <div className="relative flex flex-col">
            <input
              className={`${inputBaseClasses} ${errors.name ? 'border-red-500' : ''} bg-transparent`}
              type="text"
              placeholder="Name"
              {...register('name', {
                required: 'Name is required',
                maxLength: {
                  value: 40,
                  message: 'Name cannot exceed 40 characters'
                }
              })}
            />
            {errors.name && (
              <span className={errorClasses}>{errors.name.message}</span>
            )}
          </div>

          <div className="relative flex flex-col">
            <input
              className={`${inputBaseClasses} ${errors.email ? 'border-red-500' : ''} bg-transparent`}
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                maxLength: {
                  value: 40,
                  message: 'Email cannot exceed 40 characters'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <span className={errorClasses}>{errors.email.message}</span>
            )}
          </div>

          <div className="relative flex flex-col">
            <input
              className={`${inputBaseClasses} ${errors.contactNumber ? 'border-red-500' : ''} bg-transparent`}
              type="tel"
              placeholder="Contact Number"
              {...register('contactNumber', {
                required: 'Contact number is required',
                maxLength: {
                  value: 20,
                  message: 'Contact number cannot exceed 20 characters'
                },
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: 'Invalid contact number'
                }
              })}
            />
            {errors.contactNumber && (
              <span className={errorClasses}>{errors.contactNumber.message}</span>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-nowrap relative bg-[#E8E8E8] flex flex-row items-center text-black w-fit md:w-full max-w-[700px] border border-[#C8C8C8] rounded-full px-[50px]  md:px-[100px]   gap-5 group"
      >
        <img 
          src={Arrow}
          alt="Arrow"
          className=" h-[30px] md:h-fit absolute left-3 sm:group-hover:left-[calc(100%-75px)] transition-all duration-1000 ease-in-out group-hover:rotate-[400deg]"
        />
        <span className="w-fit font-medium mb-2 text-4xl md:text-7xl">CONTACT US!</span>
      </button>
    </form>
  );
};

function Footer() {
  return (
    <div className=" mt-[300px] w-[95%]  flex  flex-col-reverse sm:flex-row justify-center">
      <div className="flex flex-col flex-1 h-full mt-auto sm:w-[50%]">
        <h6 className=" text-xl sm:text-3xl font-light">
          The Squirrel, Copyright 2024-2025
        </h6>
      </div>

      <div className=" flex flex-col sm:w-[50%] ml-auto ">
        <h4 className="font-bold text-5xl sm:text-6xl lg:text-7xl mb-10">The Squirrel</h4>
        <p className="font-normal text-3xl mb-16">
          Efficient, Intelligent, and Innovative. We're here to revolutionize
          the way you think about service. Experience the future with us today!
        </p>
        <div className=" w-full h-[180px] flex flex-row justify-between  text-3xl font-normal">
          <div className="flex flex-col gap-1 sm:gap-6">
            <Link href="about" title="About" />
            <Link href="service" title="Service" />
          </div>
          <div className=" text-end flex flex-col gap-1 sm:gap-6">
            <Link href="home" title="Home" />
            <Link href="contact" title="Contact" />
            <Link href="cases" title="Cases" />
          </div>
        </div>
      </div>
    </div>
  );
}

 
function Link({ href, title }) {
  const handleClick = (e, linkId) => {
    e.preventDefault();
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <a   onClick={(e) => handleClick(e, href)} href={`#${href}`}>{title}</a>;
}


function Banner() {
  return (
    <div className="mt-5 w-[95%] h-[150px] md:h-[300px] flex flex-col overflow-hidden border-b border-t border-[#F0F0F0]">
    <div className="relative h-full  banner_bg p-10 md:p-16 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee ">
        <div className="flex flex-row gap-10 md:gap-16 text-7xl md:text-8xl lg:text-9xl text-[#F0F0F0] font-bold uppercase">
          <span>Home</span>
          <span>About</span>
          <span>Our services</span>
          <span>Our cases</span>
          <span>Contact US!</span>
          <span>Home</span>
          <span>About</span>
          <span>Our services</span>
          <span>Our cases</span>
          <span>Contact US!</span>
        </div>
      </div>
    </div>
  </div>
  )
}