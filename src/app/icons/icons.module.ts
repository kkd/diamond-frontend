import { NgModule } from "@angular/core";
import { FeatherModule } from "angular-feather";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AtSign,
  Award,
  Bell,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Code,
  Codesandbox,
  Copy,
  CreditCard,
  DollarSign,
  Edit,
  Edit2,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Gift,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Mail,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  Percent,
  Plus,
  PlusCircle,
  Power,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Tag,
  ThumbsUp,
  Trash2,
  TrendingUp,
  Twitter,
  User,
  UserPlus,
  Users,
  UserX,
  Video,
  X,
  XSquare,
} from "angular-feather/icons";
import {
  BellNotification,
  Bitclout,
  Card,
  Coin,
  CreatorCoin,
  Deso,
  Diamond,
  Frame,
  Gem,
  LandingBullet1,
  LandingBullet2,
  LandingBullet3,
  Lock,
  Lock2,
  MessageNotification,
  MultipleNfts,
  Quote,
  SingleNft,
} from "src/assets/img/feather";

const icons = {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AtSign,
  Award,
  Bell,
  BellNotification,
  Bitclout,
  BitcloutCircle: CreatorCoin,
  Card,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Code,
  Codesandbox,
  Coin,
  Copy,
  CreditCard,
  CreatorCoin,
  Deso,
  DollarSign,
  Diamond,
  Edit,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Frame,
  Gem,
  Gift,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  LandingBullet1,
  LandingBullet2,
  LandingBullet3,
  Link,
  Link2,
  Lock,
  Lock2,
  Mail,
  MessageNotification,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  MultipleNfts,
  Percent,
  Power,
  Plus,
  PlusCircle,
  Quote,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  SingleNft,
  Tag,
  ThumbsUp,
  Trash2,
  TrendingUp,
  User,
  Users,
  UserPlus,
  UserX,
  Video,
  X,
  XSquare,
  Edit2,
  Twitter,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
