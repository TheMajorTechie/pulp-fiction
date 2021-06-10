import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { RemixIconModule } from 'angular-remix-icon';

import {
    /* Editor */
    RiBold,
    RiItalic,
    RiUnderline,
    RiStrikethrough,
    RiLink,
    RiLinkUnlink,
    RiAlignLeft,
    RiAlignRight,
    RiAlignCenter,
    RiAlignJustify,
    RiDoubleQuotesL,
    RiText,
    RiH1,
    RiH2,
    RiH3,
    RiSeparator,
    RiListUnordered,
    RiArrowGoForwardLine,
    RiArrowGoBackLine,
    RiImageAddLine,
    RiFilmLine,
    RiEmotionHappyLine,
    RiCloseLine,
    RiCheckLine,

    /* Other */
    RiHardDrive2Line,
    RiChatSmile3Line,
    RiHome5Line,
    RiCompass3Line,
    RiGroupLine,
    RiDashboardLine,
    RiMore2Line,
    RiLoginCircleLine,
    RiLogoutCircleLine,
} from 'angular-remix-icon';

import {
    Rss,
    BookOpen,
    Archive,
    Book,
    Coffee,
    Inbox,
    Settings,
    Feather,
    Plus,
    Edit3,
    Trash2,
    Lock,
    Unlock,
    CheckSquare,
    XSquare,
    Type,
    DownloadCloud,
    Upload,
    Flag,
    Clock,
    Bold,
    Italic,
    EyeOff,
    List,
    Minus,
    Code,
    ThumbsDown,
    ThumbsUp,
    FolderPlus,
    PlusCircle,
    CheckCircle,
    ChevronRight,
    XCircle,
    Eye,
    Search,
    CornerUpLeft,
    MessageSquare,
    RefreshCw,
    PlusSquare,
    UploadCloud,
    Check,
    X,
    ArrowDownCircle,
    ArrowUpCircle,
    ArrowLeftCircle,
    ArrowRightCircle,
    Square,
    Circle,
    HelpCircle,
    LogOut,
    Key,
    Menu,
    Filter,
    RotateCcw,
    Bookmark,
    Edit,
    BarChart2,
    MessageCircle,
    PenTool,
    Cloud,
    Layers,
    ChevronLeft,
    Grid,
    AlertTriangle,
    Users,
    AlignJustify,
    Clipboard,
    Hash,
    Briefcase,
    Calendar,
    Image,
    User,
    Home,
    Map,
    Bell,
    Mail,
    Heart,
    Compass,
    UserPlus,
    HardDrive,
    Loader,
    Folder,
    FolderMinus,
    FileText,
    Globe,
    Save,
    MoreVertical,
    ChevronDown,
    ArrowRight,
    LogIn,
    UserCheck,
    Maximize,
    Share,
    Info,
    MoreHorizontal,
    Shield,
    Link,
    ExternalLink,
    Gift,
    Underline,
    Film,
    Smile,
    CornerUpRight,
    AlignLeft,
    AlignRight,
    AlignCenter,
} from 'angular-feather/icons';

const icons = {
    Rss,
    BookOpen,
    Archive,
    Book,
    Coffee,
    Inbox,
    Settings,
    Feather,
    Plus,
    Edit3,
    Trash2,
    Lock,
    Unlock,
    CheckSquare,
    XSquare,
    Type,
    DownloadCloud,
    Upload,
    Flag,
    Clock,
    Bold,
    Italic,
    EyeOff,
    List,
    Minus,
    Code,
    ThumbsDown,
    ThumbsUp,
    FolderPlus,
    PlusCircle,
    CheckCircle,
    ChevronRight,
    XCircle,
    Eye,
    Search,
    CornerUpLeft,
    MessageSquare,
    RefreshCw,
    PlusSquare,
    UploadCloud,
    Check,
    X,
    ArrowDownCircle,
    ArrowUpCircle,
    ArrowLeftCircle,
    ArrowRightCircle,
    Square,
    Circle,
    HelpCircle,
    LogOut,
    Key,
    Menu,
    Filter,
    RotateCcw,
    Bookmark,
    Edit,
    BarChart2,
    MessageCircle,
    PenTool,
    Cloud,
    Layers,
    ChevronLeft,
    Grid,
    AlertTriangle,
    Users,
    AlignJustify,
    Clipboard,
    Hash,
    Briefcase,
    Calendar,
    Image,
    User,
    Home,
    Map,
    Bell,
    Mail,
    Heart,
    Compass,
    UserPlus,
    HardDrive,
    Loader,
    Folder,
    FolderMinus,
    FileText,
    Globe,
    Save,
    MoreVertical,
    ChevronDown,
    ArrowRight,
    LogIn,
    UserCheck,
    Maximize,
    Share,
    Info,
    MoreHorizontal,
    Shield,
    Link,
    ExternalLink,
    Gift,
    Underline,
    Film,
    Smile,
    CornerUpRight,
    AlignLeft,
    AlignRight,
    AlignCenter,
};

const remixIcons = {
    /* Editor */
    RiBold,
    RiItalic,
    RiUnderline,
    RiStrikethrough,
    RiLink,
    RiLinkUnlink,
    RiAlignLeft,
    RiAlignCenter,
    RiAlignRight,
    RiAlignJustify,
    RiDoubleQuotesL,
    RiText,
    RiH1,
    RiH2,
    RiH3,
    RiListUnordered,
    RiSeparator,
    RiArrowGoForwardLine,
    RiArrowGoBackLine,
    RiImageAddLine,
    RiFilmLine,
    RiEmotionHappyLine,
    RiCloseLine,
    RiCheckLine,

    /* Other */
    RiHardDrive2Line,
    RiChatSmile3Line,
    RiHome5Line,
    RiCompass3Line,
    RiGroupLine,
    RiDashboardLine,
    RiMore2Line,
    RiLoginCircleLine,
    RiLogoutCircleLine,
};

@NgModule({
    declarations: [],
    imports: [CommonModule, FeatherModule.pick(icons), RemixIconModule.configure(remixIcons)],
    exports: [FeatherModule, RemixIconModule],
})
export class IconsModule {}
