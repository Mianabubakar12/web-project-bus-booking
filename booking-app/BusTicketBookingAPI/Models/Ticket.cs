namespace BusTicketBookingAPI.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public required string PassengerName { get; set; }  // Add 'required'
        public DateTime TravelDate { get; set; }
        public int BusId { get; set; }
    }
}
