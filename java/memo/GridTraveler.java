import java.util.HashMap;
import java.util.Map;

public class GridTraveler {
    public int gridTravelerRecursive(int m, int n) {
        if (m == 1 && n == 1) return 1;
        if (m == 0 || n == 0) return 0;

        return gridTravelerRecursive(m - 1, n) + gridTravelerRecursive(m, n - 1);
    }

    public void runRecursiveExamples() {
        System.out.println("recursive examples ----------");
        System.out.println(gridTravelerRecursive(5, 5));

        // this is really slow
        // System.out.println(gridTravelerRecursive(18, 18));
    }

    public int gridTravelerMemo(int m, int n, Map<String, Integer> memo) {
        String key = m <= n ? m + "," + n : n + "," + m;

        if (memo.containsKey(key)) return memo.get(key);
        if (m == 1 && n == 1) return 1;
        if (m == 0 || n == 0) return 0;

        // store in memo
        memo.put(key, gridTravelerMemo(m-1, n, memo) + gridTravelerMemo(m, n-1, memo));

        return memo.get(key);
    }

    public void runMemoExamples() {
        System.out.println("memo examples -----------");
        System.out.println(gridTravelerMemo(10,10, new HashMap<String, Integer>()));
    }

    public static void main(String[] args) {
        GridTraveler g = new GridTraveler();
        g.runRecursiveExamples();    
        g.runMemoExamples();
    }
}
