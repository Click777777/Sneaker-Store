import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/slices/authSlice";

export default function NameAvatar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authSlice.user);

  return (
    <div>
      <Menu>
        <MenuHandler>
          <div className="flex cursor-pointer items-center gap-3">
            {user.image && (
              <Avatar
                src={user.image}
                alt="avatar"
                size="sm"
                withBorder={true}
                className="p-0.5"
              />
            )}
            {user && (
              <div className="sr-only md:not-sr-only">
                <Typography
                  variant="h6"
                  className="font-inter text-base font-medium capitalize leading-none tracking-normal"
                >
                  Hi ,{user.email.split("@")[0]}
                </Typography>
              </div>
            )}
          </div>
        </MenuHandler>

        <MenuList>
          <MenuItem className="flex cursor-default items-center gap-2">
            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              <p className="font-inter text-sm font-medium leading-none tracking-normal">
                {/* {user.email.charAt("0").toUpperCase() + user.email.slice(1)} */}
                {user.email}
              </p>
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem
            className="flex items-center gap-2 "
            onClick={() => dispatch(logout())}
          >
            <PowerIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
