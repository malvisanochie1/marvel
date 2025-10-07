import React from "react";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import Footer from "@/components/section/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] text-[#808186] min-h-screen flex flex-col items-end justify-between sm:hidden">
        <div className="w-full justify-center flex flex-col items-center">
          <section className="flex justify-between items-center py-4 px-3 text-xl font-bold bg-white text-slate-800 w-full fixed top-0 z-10 ">
            <div>logo</div>
            <div className="rounded-full w-11 h-11 border overflow-hidden grid place-content-center bg-pink-500/20 ">
              <Image
                src="/user.png"
                width={100}
                height={100}
                className="max-h-8 h-full w-full object-cover rounded-full"
                alt=""
              />
            </div>
          </section>
          <div className="flex w-full max-w-sm flex-col gap-6 pt-20">
            <Tabs defaultValue="exercises" className="w-full mt-1 mx-auto">
              <div className="px-4 pt-2">
                <TabsList className="w-full rounded-3xl bg-gray-200">
                  <TabsTrigger value="exercises">Exercises</TabsTrigger>
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  <TabsTrigger value="exams">Exams</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="exercises">
                <div className="p-3  font-medium w-full space-y-4">
                  <div className="bg-white w-full px-3 py-5 rounded shadow">
                    <button className="rounded-3xl bg-gray-200 text-gray-900 font-semibold text-sm sm:text-sm w-full py-1">
                      0%{" "}
                    </button>
                    <h2 className="font-semibold text-sm text-blue-500 mt-4">
                      Saved Questions:{" "}
                      <span className="ps-5 text-gray-600">0</span>
                    </h2>
                    <h2 className="text-red-700/70">
                      Ready for the next lesson:{" "}
                      <span className="ps-5 text-gray-600">0</span>{" "}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2 gap-y-4 text-gray-600 font-bold mb-20">
                    <div className="bg-white rounded overflow-hidden">
                      <div>
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full px-2 py-3">
                        <h2 className="text-center text-sm">Road Signs</h2>
                      </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                      <div>
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full px-2 py-3">
                        <h2 className="text-center text-sm">The Driver</h2>
                      </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                      <div>
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full px-2 py-3">
                        <h2 className="text-center text-sm">
                          Road Trafic Rules
                        </h2>
                      </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                      <div>
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-full px-2 py-3">
                        <h2 className="text-center text-sm">The Vehicle</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="lessons">
                <div className="p-3 space-y-3">
                  <div className="bg-white rounded">
                    <div className=" grid grid-cols-12 ">
                      <div className="col-span-6">
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-span-6 flex flex-col justify-center p-3 font-semibold text-gray-700">
                        <div>
                          <h2 className="ps-1 text-sm">first Aid</h2>
                          <div className="flex items-center space-x-4 mt-1 text-gray-500">
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <IoLogoYoutube className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <FaBook className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1">
                      {" "}
                      <button className="text_orange flex items-center gap-1 text-sm font-semibold">
                        Expand <IoChevronDown />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded">
                    <div className=" grid grid-cols-12 ">
                      <div className="col-span-6">
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-span-6 flex flex-col justify-center p-3 font-semibold text-gray-700">
                        <div>
                          <h2 className="ps-1 text-sm">Driving License</h2>
                          <div className="flex items-center space-x-4 mt-1 text-gray-500">
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <IoLogoYoutube className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <FaBook className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1">
                      {" "}
                      <button className="text_orange flex items-center gap-1 text-sm font-semibold">
                        Expand <IoChevronDown />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded">
                    <div className=" grid grid-cols-12 ">
                      <div className="col-span-6">
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-span-6 flex flex-col justify-center p-3 font-semibold text-gray-700">
                        <div>
                          <h2 className="ps-1 text-sm">Insurance</h2>
                          <div className="flex items-center space-x-4 mt-1 text-gray-500">
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <IoLogoYoutube className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <FaBook className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1">
                      {" "}
                      <button className="text_orange flex items-center gap-1 text-sm font-semibold">
                        Expand <IoChevronDown />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded mb-20">
                    <div className=" grid grid-cols-12 ">
                      <div className="col-span-6">
                        <Image
                          src="/driver.jpg"
                          width={100}
                          height={100}
                          className="max-h-24 h-full w-full object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-span-6 flex flex-col justify-center p-3 font-semibold text-gray-700">
                        <div>
                          <h2 className="ps-1 text-sm">Road Citizenship</h2>
                          <div className="flex items-center space-x-4 mt-1 text-gray-500">
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <IoLogoYoutube className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                            <div className=" flex items-center">
                              <div className="w-5 p-1 h-5 rounded-full bg-gray-300 grid place-content-center">
                                <FaBook className="text-xs" />
                              </div>
                              <span className="font-semibold ps-2">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1">
                      {" "}
                      <button className="text_orange flex items-center gap-1 text-sm font-semibold">
                        Expand <IoChevronDown />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="exams">Exam</TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="h-20 w-full">
          <Footer />
        </div>{" "}
      </div>
      <div className="h-screen font-Bold hidden sm:flex justify-center items-center text-4xl px-4 text-center">
        Desktop coming soon please view on mobile...
      </div>
    </>
  );
};

export default page;
