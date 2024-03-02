import NavButton from '@/components/ui/NavButton';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-blue-900 p-5 text-white ">
        <div className="flex justify-between">
            <Image
              src='/logo.png'
              alt='logo'
              width={150}
              height={100}
              bg-left-top
            />
            {/* can be replaced by logo */}
            <ul className="flex content-center self-center">

                <NavButton
                  className="mx-5"
                  text="New Employee"
                  type="button"
                  onClick={() => {}}
                />
                <NavButton
                  className="mx-5"
                  text= "Assign Designation"
                  type="button"
                  onClick={() => {}}
                  />
                <NavButton
                  className="mx-5"
                  text= "New Designation"
                  type="button"
                  onClick={() => {}}
                  />
                <NavButton
                  className="mx-5"
                  text= "New Department"
                  type="button"
                  onClick={() => {}}
                />

            </ul>
        </div>

    </div>
  )
}

export default Navbar