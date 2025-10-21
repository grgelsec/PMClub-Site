import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  time: string;
  type: string;
  is_upcoming: boolean;
}

export const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase.from('events').select('*');
        if (error) {
          console.error('Error fetching events:', error.message);
          setUpcomingEvents([]);
          setPastEvents([]);
        } else if (data) {
          setUpcomingEvents(data.filter(event => event.is_upcoming));
          setPastEvents(data.filter(event => !event.is_upcoming));
        } else {
          setUpcomingEvents([]);
          setPastEvents([]);
        }
      } catch (err) {
        console.error('Unexpected error fetching events:', err);
        setUpcomingEvents([]);
        setPastEvents([]);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "from-primary/80 to-primary/60 border border-primary/90 text-white";
      case "Speaker": return "from-accent/80 to-accent/60 border border-accent/90 text-white";
      case "Educational": return "from-secondary/80 to-secondary/60 border border-secondary/90 text-white";
      case "Keynote": return "from-primary/80 to-accent/60 border border-primary/90 text-white";
      default: return "from-gray-500/80 to-gray-600/60 border border-gray-700/90 text-white";
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "Workshop": return "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10";
      case "Speaker": return "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z";
      case "Educational": return "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
      case "Keynote": return "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
      default: return "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-white to-secondary/10 pt-16">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-10">
            <img
              className="h-28 w-auto mx-auto transition-all duration-500 hover:scale-105 drop-shadow-lg"
              src="/assets/pmcLogo.png"
              alt="PMC Logo"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            OUR
            <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              EVENTS
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
            Join us for workshops, speakers, and networking opportunities that will accelerate your product management journey.
          </p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these exciting opportunities to learn and connect
            </p>
          </div>

           {upcomingEvents.length === 0 ? (
             <div className="text-center py-12">
               <p className="text-xl text-gray-600">No upcoming events at this time</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {upcomingEvents.map((event) => (
                 <div
                   key={event.id}
                   className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 group hover:-translate-y-2`}
                 >
                {/* Event Type Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${getEventTypeColor(event.type)}`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getEventTypeIcon(event.type)} />
                  </svg>
                  {event.type}
                </div>

                {/* Event Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{event.time}</span>
                  </div>

                </div>


              </div>
             ))}
             </div>
           )}
         </div>
       </div>

       {/* Past Events Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what we've accomplished together
            </p>
          </div>

           {pastEvents.length === 0 ? (
             <div className="text-center py-12">
               <p className="text-xl text-gray-600">No past events to display</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {pastEvents.map((event) => (
                 <div
                   key={event.id}
                   className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
                 >
                 {/* Event Type Badge */}
                 <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${getEventTypeColor(event.type)}`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getEventTypeIcon(event.type)} />
                  </svg>
                  {event.type}
                </div>

                {/* Event Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                   <div className="flex items-start">
                     <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     <span className="text-gray-500 text-sm">{event.location}</span>
                   </div>
                   <div className="flex items-start">
                     <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <span className="text-gray-500 text-sm">{event.time}</span>
                   </div>
                </div>


              </div>
             ))}
             </div>
           )}
         </div>
       </div>

       {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Never miss an event! Join our community to get notified about upcoming workshops and speakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
              >
                Join Our Community
              </Link>
              <Link
                to="/about"
                className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl border-2 border-white/30"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
