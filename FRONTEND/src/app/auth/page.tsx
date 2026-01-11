import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import Register from "./register";
import Login from "./login";

type Props = {};

export default function authPage({}: Props) {
  return (
    // <div>
    //   <Tabs defaultValue="Login" className="">
    //     <div className="flex items-center">
    //       <TabsList className="grid w-full grid-cols-2 bg-background pt-24">
    //         <TabsTrigger value="Login">Login</TabsTrigger>
    //         <TabsTrigger value="Register">Register</TabsTrigger>
    //       </TabsList>
    //     </div>

    //     {/* LOGIN TAB */}

    //     <TabsContent value="Login">Login</TabsContent>
    //     {/* REGISTER TAB */}
    //     <TabsContent value="Register">
    //       <Register />
    //     </TabsContent>
    //   </Tabs>
    // </div>
    <div>
      <div className="text-3xl font-bold justify-center flex py-5">
        Login Or Register
      </div>
      <Tabs defaultValue="login" className="px-10 py-10 ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="flex items-center justify-center">
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Login />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader className="flex items-center justify-center">
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Register />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
