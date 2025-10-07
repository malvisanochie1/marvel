import Image from "next/image";
import Footer from "@/components/section/footer";
export default function Home() {
  return (
    <>
      <div className="bg-[#F4F4F4] text-[#808186] min-h-screen flex flex-col items-end justify-between sm:hidden">
        <div className="w-full">
          <section className="flex justify-between items-center py-4 px-3 text-xl font-bold bg-white text-slate-800 w-full fixed top-0 z-10 ">
            <div>logo</div>
            <div className="rounded-full w-9 h-9 border overflow-hidden grid place-content-center bg-pink-500/20 ">
              <Image
                src="/user.png"
                width={100}
                height={100}
                className="max-h-6 h-full w-full object-cover rounded-full"
                alt=""
              />
            </div>
          </section>
          <div className="p-3  font-medium w-full space-y-4 pt-20">
            <div className="bg-white w-full px-3 py-5 rounded shadow">
              <h2 className="font-semibold text-sm mb-2.5 text-gray-600">
                Hi marvel <br /> <span>Ready for the next lesson?</span>
              </h2>
              <button className="rounded-3xl bg-[#d49400] text-amber-100 font-semibold text-sm sm:text-sm w-full py-2">
                Start Lesson
              </button>
            </div>
            <div className="grid grid-cols-3 bg-white w-full px-3 py-5 rounded shadow gap-3">
              <div>
                <Image
                  src="/home.jpeg"
                  width={100}
                  height={100}
                  className="max-h-24 h-full object-cover"
                  alt=""
                />
              </div>

              <div className="col-span-2">
                {" "}
                <h2 className="font-extrabold text-gray-600 text-base">
                  Exam Simulator{" "}
                </h2>
                <p className="text-xs leading-4 font-bold mb-2">
                  Prepare for the highway code test
                </p>
                <button className="rounded-3xl border border-[#d49400] text-[#d49400] font-semibold text-sm sm:text-sm w-full py-1.5">
                  Start Simulator
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 bg-white w-full px-3 py-5 rounded shadow gap-3">
              <div>
                <Image
                  src="/home.jpeg"
                  width={100}
                  height={100}
                  className="max-h-24 h-full object-cover"
                  alt=""
                />
              </div>

              <div className="col-span-2">
                {" "}
                <h2 className="font-extrabold text-gray-600 text-base">
                  Practical Courses{" "}
                </h2>
                <p className="text-xs leading-4 font-bold mb-2">
                  Start your registration into the practical world{" "}
                </p>
                <button className="rounded-3xl border border-[#d49400] text-[#d49400] font-semibold text-sm sm:text-sm w-full py-1.5">
                  Start Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 w-full">
          <Footer />
        </div>
      </div>{" "}
      <div className="h-screen font-Bold flex justify-center items-center text-4xl">
        Desktop coming soon please view on mobile...
      </div>
    </>
  );
}
