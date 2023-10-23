"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

export const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn("google");
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="py-4 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user?.name![0].toUpperCase()}
                  </AvatarFallback>

                  {data?.user?.image && <AvatarImage src={data?.user?.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">Olá, {data?.user?.name}</p>
                  <p className="font-medium text-xs opacity-75">
                    Boas compras!
                  </p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3">
            {status === "authenticated" ? (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogout}
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogin}
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/" passHref>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentCircleIcon size={16} />
              Ofertas
            </Button>

            <SheetClose asChild>
              <Link href="/catalog" passHref>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/" passHref>
        <h1 className="font-semibold text-lg">
          <span className="text-primary">FSW</span>Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
