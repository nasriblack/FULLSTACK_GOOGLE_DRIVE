import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="Sign out"
              width={20}
              height={20}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
