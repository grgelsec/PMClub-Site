import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { boardMemberSchema } from '../utils/validation';
import { ZodIssue } from 'zod';

interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

interface CommitteeMember {
  id: string;
  name: string;
  focus: string;
  linkedin: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  time: string;
  type: string;
  is_upcoming: boolean;
}

interface AllowedEmail {
  id: string;
  email: string;
}

export const AdminPage = () => {
  const navigate = useNavigate();
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [allowedEmails, setAllowedEmails] = useState<AllowedEmail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [boardRes, committeeRes, eventsRes, emailsRes] = await Promise.all([
      supabase.from('board_members').select('*'),
      supabase.from('committee_members').select('*'),
      supabase.from('events').select('*'),
      supabase.from('allowed_emails').select('*'),
    ]);

    if (boardRes.data) setBoardMembers(boardRes.data);
    if (committeeRes.data) setCommitteeMembers(committeeRes.data);
    if (eventsRes.data) setEvents(eventsRes.data);
    if (emailsRes.data) setAllowedEmails(emailsRes.data);
    setLoading(false);
  };

  const handleDelete = async (table: string, id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      await supabase.from(table).delete().eq('id', id);
      fetchData();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/20 via-white to-secondary/10">
        <div className="text-xl text-gray-900">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Logout
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-white to-secondary/10 pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
                ADMIN
                <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
                  DASHBOARD
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
                Manage board members, committee, and events for the PM Club website.
              </p>
            </div>
          </div>

        {/* Board Members Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Board Members
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage executive team members
              </p>
            </div>
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {boardMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">LinkedIn</a>
                    <button
                      onClick={() => handleDelete('board_members', member.id)}
                      className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Delete
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <AddBoardMemberForm onAdd={fetchData} />
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Committee Members
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage committee team members
              </p>
            </div>
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {committeeMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.focus}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">LinkedIn</a>
                    <button
                      onClick={() => handleDelete('committee_members', member.id)}
                      className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Delete
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <AddCommitteeMemberForm onAdd={fetchData} />
          </div>
        </section>

        {/* Events Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage upcoming and past events
              </p>
            </div>
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
                      <p className="text-gray-700"><strong>Time:</strong> {event.time}</p>
                      <p className="text-gray-700"><strong>Type:</strong> {event.type}</p>
                      <p className="text-gray-700"><strong>Status:</strong> {event.is_upcoming ? 'Upcoming' : 'Past'}</p>
                    </div>
                    <button
                      onClick={() => handleDelete('events', event.id)}
                      className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Delete
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <AddEventForm onAdd={fetchData} />
          </div>
        </section>

        {/* Allowed Emails Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Allowed Emails
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage emails authorized for admin login
              </p>
            </div>
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {allowedEmails.map((item) => (
                  <motion.div
                    key={item.id}
                    className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <p className="text-xl font-bold text-gray-900">{item.email}</p>
                    <button
                      onClick={() => handleDelete('allowed_emails', item.id)}
                      className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Remove
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <AddEmailForm onAdd={fetchData} />
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

const AddBoardMemberForm = ({ onAdd }: { onAdd: () => void }) => {
  const [form, setForm] = useState({ name: '', role: '', bio: '', linkedin: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = boardMemberSchema.safeParse(form);
    if (!result.success) {
      const errorMap: Record<string, string> = {};
      result.error.issues.forEach((issue: ZodIssue) => {
        if (issue.path[0]) errorMap[issue.path[0] as string] = issue.message;
      });
      setErrors(errorMap);
      return;
    }

    await supabase.from('board_members').insert([form]);
    setForm({ name: '', role: '', bio: '', linkedin: '' });
    onAdd();
  };

  return (
    <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
      <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Add New Board Member</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
            <input
              type="text"
              placeholder="e.g., Co-President"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
          <textarea
            placeholder="Brief biography"
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn URL</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
          >
            Add Board Member
          </button>
        </div>
      </form>
    </div>
  );
};

const AddCommitteeMemberForm = ({ onAdd }: { onAdd: () => void }) => {
  const [form, setForm] = useState({ name: '', focus: '', linkedin: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('committee_members').insert([form]);
    setForm({ name: '', focus: '', linkedin: '' });
    onAdd();
  };

  return (
    <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
      <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Add New Committee Member</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Focus Area</label>
            <input
              type="text"
              placeholder="e.g., Event Coordination"
              value={form.focus}
              onChange={(e) => setForm({ ...form, focus: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn URL</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
          >
            Add Committee Member
          </button>
        </div>
      </form>
    </div>
  );
};

const AddEventForm = ({ onAdd }: { onAdd: () => void }) => {
  const [form, setForm] = useState({ title: '', description: '', location: '', time: '', type: '', is_upcoming: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('events').insert([form]);
    setForm({ title: '', description: '', location: '', time: '', type: '', is_upcoming: true });
    onAdd();
  };

  return (
    <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
      <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Add New Event</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Event Title</label>
          <input
            type="text"
            placeholder="Event Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Event description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Event location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
            <input
              type="text"
              placeholder="e.g., Feb 4th, 2025 | 7PM"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Type</option>
              <option value="Workshop">Workshop</option>
              <option value="Speaker">Speaker</option>
              <option value="Educational">Educational</option>
              <option value="Keynote">Keynote</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={form.is_upcoming}
                onChange={(e) => setForm({ ...form, is_upcoming: e.target.checked })}
                className="mr-2"
              />
              Upcoming Event
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

const AddEmailForm = ({ onAdd }: { onAdd: () => void }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('allowed_emails').insert([{ email }]);
    setEmail('');
    onAdd();
  };

  return (
    <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
      <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Add Allowed Email</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="board@club.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
          >
            Add Email
          </button>
        </div>
      </form>
    </div>
  );
};