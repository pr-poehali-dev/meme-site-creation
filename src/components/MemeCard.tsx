import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Meme } from "@/data/memes";

interface MemeCardProps {
  meme: Meme;
}

const MemeCard = ({ meme }: MemeCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm border-purple-200/50">
      <CardHeader className="pb-3">
        <div className="aspect-video w-full mb-3 overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
          <img
            src={meme.imageUrl}
            alt={meme.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
            {meme.title}
          </CardTitle>
          <div className="flex gap-1 flex-shrink-0">
            <Badge
              variant="secondary"
              className="text-xs bg-purple-100 text-purple-700"
            >
              {meme.year}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-gray-600 mb-3 line-clamp-2">
          {meme.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="text-xs border-purple-200 text-purple-600"
          >
            {meme.category}
          </Badge>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <span className="text-xs text-gray-500 font-medium">
              {meme.popularity}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemeCard;
