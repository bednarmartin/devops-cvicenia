
namespace backend.Repository;

using backend.DatabaseModel;

public interface ITransactionRepository{

    List<Transaction> GetAllTransactions();

    Transaction GetTransactionById(int id);
    
}