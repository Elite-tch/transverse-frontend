import Faqs from "./FaqCard"

function page() {
  return (
    <div className='flex flex-col gap-2 md:gap-6  mx-auto text-center w-full md:w-10/12 lg:w-8/12 xl:w-6/12 p-5 md:p-10 '>
    <div className='flex flex-col gap-1 md:gap-2'>
      <h4 className='text-Header-text dark:text-purple-100 text-2xl'>FAQs</h4>
      <p className='text-paragraph-text dark:text-gray-100 text-sm'>Confused about something? Be sure to gain clarity from us.</p>
    </div>
    <div className='grid grid-cols-1 gap-2 md:gap-6 w-max"'>
      <Faqs title='What is Transverse Pay?' description='Transverse Pay is a name of a person, animal, place or thing.' />
      <Faqs title='How to use Transverse Pay?' description='Transverse Pay is a name of a person, animal, place or thing.' />
    
      <Faqs title='Is Transverse Pay right for you?' description='Transverse Pay is a name of a person, animal, place or thing.' />
    
    </div>
    </div>
  )
}

export default page
