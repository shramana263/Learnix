//L70V9VJcjjUiZPBg
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {

    const [loginInput, setLoginInput] = useState({ email: "", password: "" })
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" })

    const handleInput = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        }
        else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    }

    const handleRegistration = (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        console.log(inputData);
        // console.log(loginInput);
    }

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">SignUp</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Create new account to get started.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signupInput.name}
                                    onChange={(e) => handleInput(e, 'signup')}
                                    placeholder="Eg. : Ash Ketchum"
                                    required="true"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email-id</Label>
                                <Input type="email"
                                    name="email"
                                    value={signupInput.email}
                                    onChange={(e) => handleInput(e, 'signup')}
                                    placeholder="Eg. : ash@example.com"
                                    required="true"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type='password'
                                    name="password"
                                    value={signupInput.password}
                                    onChange={(e) => handleInput(e, 'signup')}
                                    placeholder="Eg. : ash123"
                                    required="true"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("signup")}>Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login to your account to continue lessons
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email-id</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={loginInput.email}
                                    onChange={(e) => handleInput(e, 'login')}
                                    placeholder="Eg. : ash@example.com"
                                    required="true"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type='password'
                                    name="password"
                                    value={loginInput.password}
                                    onChange={(e) => handleInput(e, 'login')}
                                    placeholder="Eg. : ash123"
                                    required="true"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login
