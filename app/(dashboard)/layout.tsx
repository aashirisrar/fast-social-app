import NavbarDashboard from "@/components/navbar-dashboard";
import SidebarDashboard from "@/components/sidebar-dashboard";
import EventList from "@/components/EventsList";
import Brdy from "@/components/BrdyEvent";
import LeftSidebar from "@/components/LeftSidebar";
// import Postt from "./Postt";
import Inputbox from "@/components/inputbox";
import PostImage from "@/components/tris.jpeg";
import PostImage1 from "@/components/post1.jpeg";
import PostImage2 from "@/components/trist.jpg";
import eimg from "@/components/oip.jpeg";
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const heading = "Your Upcoming Events";
  const heading2 = "Upcoming Birthdays";
  const PostId = "Ahmed Mukhtar Shared ";
  const PostText =
    "This is a basic example of a React component that displays a list of chats and online contacts. You can customize this component to add more features, such as styling the chat list or adding functionality to the chat groups and contacts.";

    return (
        // grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]
        <div className="flex h-screen relative">
            {/* hidden  border-r md:block */}
            <div className="w-24 md:block ">
                <SidebarDashboard />
            </div>



            <div className="">
            <Inputbox />
          </div>


            <div className="flex flex-col flex-grow overflow-hidden">
        <div className="flex">
          <div className="w-1/6">
            <div className="hidden lg:inline absolute w-72 top-20 right-72">
              <EventList heading={heading} />
            </div>
          </div>
          <div className="w-1/6">
            <div className="hidden lg:inline absolute w-72 top-[510px] right-[288px]">
              <Brdy heading={heading2} />
            </div>
          </div>
          <div className="w-24">
            <div className="hidden lg:inline absolute top-0 right-0">
              <LeftSidebar />
            </div>
          </div>
          <div className="flex-grow">
          {/* flex */}
            <div className=" flex-col h-full">
            <main className="absolute top-60 left-[18%] w-1/3">
                    {children}
                </main>
            {/* overflow-y-auto p-6 md:p-12 max-w-7xl mx-auto */}
              {/* <div className="">
                {children}
              </div> */}
              {/* <div className="relative w-[57%] top-16 right-16">
                <Postt
                  PostId={PostId}
                  Eventimg={eimg}
                  PostText={PostText}
                  PostImage={PostImage}
                  PostImage1={PostImage1}
                  PostImage2={PostImage2}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>




            <div className="w-full">
                <NavbarDashboard />
                {/* flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 */}
                
            </div>
        </div>
    );
};

export default DashboardLayout;