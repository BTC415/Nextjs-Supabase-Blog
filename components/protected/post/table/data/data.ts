import {
  CategoryHealthIcon,
  CategoryMarketingIcon,
  CategoryScienceIcon,
  CategoryTechnologyIcon,
} from "@/icons/categories";
import {
  Pencil2Icon as DraftIcon,
  CheckCircledIcon as PublishedIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "published",
    label: "Published",
    icon: PublishedIcon,
  },
  {
    value: "draft",
    label: "Draft",
    icon: DraftIcon,
  },
];

export const categories = [
  {
    value: "4db30a13-2797-4c7d-a0ce-e0c127287a39",
    label: "Science",
    icon: CategoryScienceIcon,
  },
  {
    value: "c13ae4a7-476c-4608-9b7a-9ec9488c42e4",
    label: "Health",
    icon: CategoryHealthIcon,
  },
  {
    value: "7b8781b0-b4fa-40e4-ac23-5310640eecd7",
    label: "Marketing",
    icon: CategoryMarketingIcon,
  },
  {
    value: "962f860d-ab0d-4650-ae93-8171c8b47169",
    label: "Technology",
    icon: CategoryTechnologyIcon,
  },
];
