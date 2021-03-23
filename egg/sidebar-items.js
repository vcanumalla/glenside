initSidebarItems({"enum":[["ENodeOrVar","The language of `Pattern`s."],["StopReason","Error returned by `Runner` when it stops."]],"fn":[["merge_if_different","Replace the first with second value if they are different returning whether or not something was done."]],"macro":[["define_language","A macro to easily create a `Language`."],["rewrite","A macro to easily make `Rewrite`s."],["test_fn","Make a test function"]],"mod":[["tutorials","A Guide-level Explanation of `egg`"]],"struct":[["AstDepth","A simple `CostFunction` that counts maximum ast depth."],["AstSize","A simple `CostFunction` that counts total ast size."],["BackoffScheduler","A `RewriteScheduler` that implements exponentional rule backoff."],["ConditionEqual","A `Condition` that checks if two terms are equivalent."],["ConditionalApplier","An `Applier` that checks a `Condition` before applying."],["Dot","A wrapper for an `EGraph` that can output GraphViz for visualization."],["EClass","An equivalence class of enodes."],["EGraph","A data structure to keep track of equalities between expressions."],["Extractor","Extracting a single `RecExpr` from an `EGraph`."],["Id","A key to identify `EClass`es within an `EGraph`."],["Iteration","Data generated by running a `Runner` one iteration."],["Pattern","A pattern that can function as either a `Searcher` or `Applier`."],["RecExpr","A recursive expression from a user-defined `Language`."],["Rewrite","A rewrite that searches for the lefthand side and applies the righthand side."],["Runner","Faciliates running rewrites over an `EGraph`."],["SearchMatches","The result of searching a `Searcher` over one eclass."],["SimpleScheduler","A very simple `RewriteScheduler` that runs every rewrite every time."],["Subst","A substitition mapping `Var`s to eclass `Id`s."],["Symbol","An interned string."],["SymbolLang","A simple language used for testing."],["Var","A variable for use in `Pattern`s or `Subst`s."]],"trait":[["Analysis","Arbitrary data associated with an `EClass`."],["Applier","The righthand side of a `Rewrite`."],["Condition","A condition to check in a `ConditionalApplier`."],["CostFunction","A cost function that can be used by an `Extractor`."],["IterationData","Custom data to inject into the `Iteration`s recorded by a `Runner`"],["Language","Trait that defines a Language whose terms will be in the `EGraph`."],["LanguageChildren","A marker that defines acceptable children types for `define_language!`."],["RewriteScheduler","A way to customize how a `Runner` runs `Rewrite`s."],["Searcher","The lefthand side of a `Rewrite`."]],"type":[["PatternAst","A `RecExpr` that represents a `Pattern`."]]});