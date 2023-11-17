import React from 'react'
import Image from "next/image";

const ProfilePage = () => {
  return (
        <div>
            <div className="header">Heading</div>
            <div className="container mx-auto flex-row gap-5 justify-around mt-10 p-10 bg-slate-500 rounded-xl ">
                <div className="w-1/4 bg-slate-400 rounded-xl p-4 justify-center ">
                    <div className="flex flex-col justify-center items-center p-4 text-center ">
                        <Image
                            className="rounded-full "
                            src="/Assets/profile-pic.png"
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <h2 className="font-semibold" >Dennis  Koskei</h2>
                        <p className="font-semibold text-sm " >example@mail.com</p>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>something 1</li>
                            <li>something 2</li>
                            <li>something 3</li>
                            <li>something 4</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-col gap-4 w-3/4">
                    <div className="flex flex-wrap flex-row m-2 justify-between">
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                      <div className="flex flex-col py-2 px-1 flex-wrap w-1/4 justify-center rounded-xl bg-slate-400">
                        <h1>+45770</h1>
                        <p>Startistic</p>
                      </div>
                    </div>
                    <div className="Content">Content </div>
                    <div className="">Content</div>
                    <div className="">Content</div>
                    <div className="">Content</div>
                    Profile image and other stuff AdminPage This is the admin
                    page.
                </div>
            </div>
        </div>
  )
}

export default ProfilePage