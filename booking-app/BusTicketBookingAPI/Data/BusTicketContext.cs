// Developed by UCP Tigers - Bus Ticket Booking System
using Microsoft.EntityFrameworkCore;
using BusTicketBookingAPI.Models;

namespace BusTicketBookingAPI.Data
{
    public class BusTicketContext : DbContext
    {
        public BusTicketContext(DbContextOptions<BusTicketContext> options) : base(options) { }

        public DbSet<Bus> Buses { get; set; }
        public DbSet<Ticket> Tickets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
