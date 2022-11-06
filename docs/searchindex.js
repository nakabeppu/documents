Search.setIndex({"docnames": ["index", "src/00_00_python", "src/01_00_machine_learning", "src/01_01", "src/02_00_computer_vision", "src/02_01_yolov5", "src/02_02_yolo2onnx", "src/02_03_vision_transformer", "src/03_00_natural_language_processing", "src/03_01_bert", "src/04_00_time_seriese", "src/05_00_adversarial", "src/06_00_reinforcement_learning", "src/07_00_optimization", "src/07_01", "src/99_00_miscellaneous"], "filenames": ["index.rst", "src/00_00_python.ipynb", "src/01_00_machine_learning.ipynb", "src/01_01.ipynb", "src/02_00_computer_vision.ipynb", "src/02_01_yolov5.ipynb", "src/02_02_yolo2onnx.ipynb", "src/02_03_vision_transformer.ipynb", "src/03_00_natural_language_processing.ipynb", "src/03_01_bert.ipynb", "src/04_00_time_seriese.ipynb", "src/05_00_adversarial.ipynb", "src/06_00_reinforcement_learning.ipynb", "src/07_00_optimization.ipynb", "src/07_01.ipynb", "src/99_00_miscellaneous.ipynb"], "titles": ["documents : nakabeppu", "\u30fc 0. Python \u30fc", "\u30fc 1. Machine Learning \u30fc", "\u57fa\u790e", "\u30fc 2. Computer Vision \u30fc", "YOLOV5", "YOLO to ONNX", "Vision Transformer", "\u30fc 3. Natural Language Processing \u30fc", "BERT \u306b\u3088\u308b\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0", "\u30fc 4. Time Seriese \u30fc", "\u30fc 5. Adversarial \u30fc", "\u30fc 6. Reinforcement Learning \u30fc", "\u30fc 7. Optimization \u30fc", "OR-Tools", "\u30fc 99. Miscellaneous \u30fc"], "terms": {"python": [0, 5, 6], "machine": 0, "learning": [0, 3, 7], "\u57fa\u790e": 0, "\u30c7\u30fc\u30bf": 0, "\u53ef\u8996": 0, "\u51e6\u7406": [0, 6, 7], "model": [0, 5, 7, 9], "classification": 0, "regression": 0, "computer": 0, "vision": 0, "yolov": [0, 6], "data": [0, 3, 6, 7, 9], "git": 0, "clone": 0, "\u524d\u51e6": [0, 9], "\u30e2\u30c7\u30eb": [0, 6, 9], "\u69cb\u7bc9": 0, "\u5b66\u7fd2": [0, 3, 6], "\u63a8\u8ad6": [0, 3, 6], "\u53ef\u8996\u5316": 0, "yolo": 0, "to": [0, 3, 5, 7, 9], "onnx": 0, "prediction": 0, "with": [0, 3, 5, 7, 9], "pytorch": [0, 7], "export": 0, "runtime": [0, 5], "transformer": 0, "\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0": 0, "\u7406\u89e3": 0, "\u72ac\u732b": 0, "\u753b\u50cf": [0, 6], "\u5206\u985e": 0, "\u8a66\u3057": 0, "\u4e8b\u524d": 0, "\u6e08\u307f": [0, 5, 6], "\u6d3b\u7528": 0, "natural": 0, "language": 0, "processing": [0, 6], "bert": 0, "\u306b\u3088\u308b": 0, "\u7279\u5fb4": 0, "\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0": 0, "time": [0, 5], "seriese": 0, "adversarial": 0, "reinforcement": 0, "optimization": [0, 6], "or": [0, 3, 5, 6, 9], "-tools": 0, "miscellaneous": 0, "[1": [3, 5, 6, 9], "]:": [3, 5, 6, 7, 9], "import": [3, 5, 6, 7, 9], "numpy": [3, 5, 6, 7, 9], "as": [3, 5, 6, 7, 9], "np": [3, 5, 6, 7, 9], "pandas": [3, 5, 6, 7, 9], "pd": [3, 5, 6, 7, 9], "matplotlib": [3, 5, 6, 7, 9], ".pyplot": [3, 5, 6, 7, 9], "plt": [3, 5, 6, 7, 9], "inline": 3, "seaborn": [3, 5, 9], "sns": [3, 5, 9], "plotly": 3, ".express": 3, "px": 3, ".graph": 3, "_objects": 3, "go": 3, ".io": 3, "pio": 3, ".templates": 3, "from": [3, 5, 6, 7, 9], ".ticker": 3, "strmethodformatter": 3, "sklearn": [3, 5, 7, 9], ".preprocessing": 3, "standardscaler": 3, "minmaxscaler": 3, "labelbinarizer": 3, "warnings": [3, 5, 7, 9], ".filterwarnings": [3, 5, 9], "('": [3, 5, 6, 7, 9], "ignore": [3, 5, 9], "')": [3, 5, 6, 7, 9], "[2": [3, 6, 7, 9], "\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8": 3, "titanic": 3, "df": [3, 5, 6, 9], "_train": [3, 7], ".read": 3, "_csv": 3, "/train": [3, 5, 7], ".csv": 3, "_test": [3, 5], "/test": [3, 5, 6], "_gender": 3, "/gender": 3, "_submission": 3, "[3": [3, 6, 7, 9], ".head": [3, 5, 6, 7], "()": [3, 5, 6, 7, 9], "passengerid": 3, "survived": 3, "pclass": 3, "name": [3, 5, 6], "sex": 3, "age": 3, "sibsp": 3, "parch": 3, "ticket": 3, "fare": 3, "cabin": 3, "embarked": 3, "braund": 3, "mr": 3, "owen": 3, "harris": 3, "male": 3, "nan": 3, "cumings": 3, "mrs": 3, "john": 3, "bradley": 3, "florence": 3, "briggs": 3, "th": 3, "...": [3, 5, 6, 9], "female": 3, "pc": 3, "c8": 3, "heikkinen": 3, "miss": 3, "laina": 3, "ston": 3, "/o": 3, "futrelle": 3, "jacques": 3, "heath": 3, "lily": 3, "may": [3, 9], "peel": 3, "c12": 3, "allen": 3, "william": 3, "henry": 3, "[4": [3, 5, 6, 7, 9], "[5": [3, 5, 6, 7, 9], "\u78ba\u8a8d": [3, 6, 7], ".info": 3, "&lt": 3, ";class": 3, ".core": 3, ".frame": 3, ".dataframe": [3, 5, 6, 9], "&#": [3, 5, 6, 7, 9], ";&": 3, "gt": 3, "rangeindex": 3, "entries": 3, "columns": [3, 5, 6, 9], "total": [3, 5], "):": [3, 5, 6, 7, 9], "column": 3, "non": [3, 6], "-null": 3, "count": 3, "dtype": [3, 6, 7, 9], "--": [3, 5], "int": [3, 5, 6, 7], "object": [3, 5], "float": [3, 6, 7], "dtypes": 3, "),": [3, 5, 6, 7], "memory": 3, "usage": 3, "kb": [3, 5], "[6": [3, 5, 6, 7, 9], "\u6b20\u640d": 3, ".heatmap": 3, "(df": [3, 5], ".isnull": 3, ", cbar": 3, "=false": [3, 5, 6, 7], ");": 3, "[7": [3, 5, 6, 7, 9], "\u751f\u5b58": 3, "women": 3, ".loc": 3, "[df": [3, 5], "['": [3, 5, 6, 7, 9], "']": [3, 5, 6, 7, 9], "= '": 3, "rate": [3, 7], "_women": 3, "sum": 3, "(women": 3, ")/": [3, 5], "len": [3, 5, 6, 7, 9], "men": 3, "_men": 3, "(men": 3, "print": [3, 5, 6, 7], "of": [3, 5, 6, 7, 9], "who": 3, ":'": [3, 6], ", rate": 3, "[8": [3, 5, 6, 7, 9], "for": [3, 5, 6, 7, 9], "dataset": [3, 5, 7], "in": [3, 5, 6, 7, 9], "mean": [3, 7], "std": [3, 7], "is": [3, 5, 6, 9], "_null": 3, "isnull": 3, "compute": 3, "random": [3, 5, 7], "numbers": 3, "between": 3, "the": [3, 5, 6, 7, 9], "and": [3, 5, 7], "rand": 3, "_age": 3, ".random": [3, 7], ".randint": 3, "(mean": [3, 7], "size": [3, 5, 6], "fill": [3, 6], "values": [3, 6], "generated": 3, "_slice": 3, "copy": [3, 5], "[np": 3, ".isnan": 3, "(age": 3, ")]": [3, 7], "astype": [3, 5, 6], "(int": 3, "[9": [3, 5, 6, 7, 9], "not": [3, 5, 6, 9], "_survived": 3, "fig": [3, 7], "axes": 3, ".subplots": [3, 7], "(nrows": 3, "ncols": 3, "figsize": 3, "=(": [3, 5, 7], "))": [3, 5, 6, 7, 9], "=='": 3, "ax": [3, 7], ".distplot": 3, "[women": 3, "==": [3, 5, 6, 7], "].": [3, 5, 6, 9], ".dropna": 3, ", bins": 3, "label": [3, 5, 6, 7], "],": [3, 5, 6, 9], "kde": 3, "false": [3, 5, 7], "color": [3, 5, 6], "='": [3, 5, 6, 9], "green": 3, "red": 3, ".legend": [3, 7], ".set": [3, 7], "_title": 3, "[men": 3, "10": [3, 5, 6, 7], ".scatter": 3, "3d": 3, "',": [3, 5, 6, 9], ".show": [3, 5], "type": [3, 6, 9], "cannot": 3, "be": [3, 6, 9], "displayed": 3, "application": 3, "/vnd": 3, ".plotly": 3, ".v": 3, "json": [3, 6], "11": [3, 5, 6, 7], "template": 3, "log": [3, 7], "_x": 3, "=true": [3, 5, 6, 7], "_max": [3, 7], "=template": 3, "title": 3, "which": 3, "?'": 3, "12": [3, 5, 7], ".barplot": 3, "(x": [3, 5, 7, 9], "=df": 3, "13": [3, 5, 7], ".rc": 3, "xtick": 3, "labelsize": 3, "ytick": 3, ".figure": [3, 5], ".groupby": 3, "plot": 3, ".hist": 3, "(histtype": 3, "bar": 3, "alpha": 3, "((": [3, 5, 6], "died": 3, ", fontsize": 3, ".xlabel": 3, "fontsize": 3, "14": [3, 5, 7], "_mode": 3, "mode": 3, "fillna": 3, "(embarked": 3, "15": [3, 5, 7], "facetgrid": 3, ".facetgrid": 3, "row": [3, 5, 6], "aspect": 3, ".map": 3, "(sns": 3, ".pointplot": 3, "order": [3, 7], "=none": [3, 5], "hue": 3, "_order": 3, ".add": [3, 6], "_legend": 3, "16": [3, 7], ".countplot": 3, "palette": 3, "set": 3, "17": [3, 6, 7], "relatives": 3, "[dataset": 3, "travelled": 3, "_alone": 3, "no": [3, 5], "yes": 3, ".factorplot": 3, "18": [3, 5, 6, 7], "19": [3, 5, 6, 7], ".histogram": 3, "marginal": 3, "rug": 3, "hover": 3, "_data": [3, 6, 7], ".columns": 3, "_dark": 3, "=\"": 3, "?\"": 3, "\u306e\u307f": [3, 7, 9], "\u53d6\u5f97": [3, 7], "def": [3, 5, 6, 7, 9], "create": [3, 5, 6], "_numeric": 3, "(input": [3, 6], "_df": [3, 5, 6, 9], "use": 3, "_cols": 3, "return": [3, 6, 7, 9], "input": [3, 5, 6], "[use": 3, "]-": 3, ">[": 3, "_count": 3, "_encoding": 3, "_columns": 3, "out": [3, 6, 7, 9], "\u57fa\u76e4": 3, "\u3059\u308b": [3, 7], "vc": 3, "[column": 3, "value": [3, 5, 6, 7], "_counts": [3, 5, 6], "map": [3, 5], "(vc": 3, "_prefix": 3, "ce": 3, "_'": 3, "'a": 3, "'b": 3, "_one": 3, "_hot": 3, "[vc": 3, "20": 3, "\u591a\u3044": 3, "\u5834\u5408": [3, 7], "\u4f7f\u7528": [3, 9], "cat": [3, 7], ".categorical": 3, "categories": 3, "=vc": 3, ".index": [3, 5, 9], "\u3053\u306e": [3, 7], "\u30bf\u30a4\u30df\u30f3\u30b0": 3, "one": 3, "-hot": 3, "_i": [3, 7], ".get": [3, 6, 7], "_dummies": 3, "(cat": 3, "catgory": 3, "\u3068\u3057\u3066": 3, "\u8a8d\u8b58": 3, "\u3044\u308b": [3, 7], "\u306e\u3067": 3, "list": [3, 5, 7], "\u306b\u3057": 3, "\u89e3\u9664": 3, "\u3053\u3046\u3057": 3, "\u306a\u3044": 3, "concat": 3, "\u30a8\u30e9\u30fc": 3, "\u306a\u308b": [3, 6, 7], ".tolist": 3, "(f": [3, 6, 7], "'{": 3, "}=": 3, ".concat": [3, 5, 6, 9], "([": [3, 5, 6, 7, 9], "axis": [3, 6, 9], "tqdm": [3, 9], "_feature": [3, 9], "processors": 3, "func": 3, "(processors": 3, "=len": 3, "\u4e00\u81f4": 3, "\u305a\u308c": 3, "\u5b9f\u88c5": [3, 7], "\u304a\u304b\u3057\u3044": 3, "\u3053\u3068": 3, "\u304c\u308f\u304b\u308b": 3, "assert": 3, "(_": [3, 7], "._": [3, 9], "__": [3, 6, 7, 9], "%|": 3, "\u2588\u2588": [3, 5], "lt": [3, 5], "it": [3, 5, 9], "/s": [3, 5], "lightgbm": 3, "lgbm": 3, ".metrics": [3, 7], "roc": 3, "_auc": 3, "_score": [3, 7], "_curve": 3, "accuracy": [3, 7], "fit": [3, 5], "_lgbm": 3, "cv": 3, "params": [3, 5], "dict": 3, "verbose": [3, 6], "if": [3, 5, 6, 7, 9], "none": [3, 5], "models": [3, 5, 7], "oof": 3, "_pred": [3, 5], ".zeros": 3, "_like": 3, "(y": 3, "=np": 3, ".float": [3, 7], "idx": [3, 7], "_valid": 3, "enumerate": [3, 7], "(cv": 3, "[idx": [3, 7], "clf": 3, ".lgbmclassifier": 3, "(*": [3, 7], ".fit": 3, "eval": 3, "_set": 3, "=[": [3, 5, 6, 7], "early": 3, "_stopping": 3, "_rounds": 3, "=verbose": 3, "pred": [3, 6, 7], ".predict": 3, ".append": [3, 5, 6, 7], "(clf": 3, "'fold": 3, "-auc": 3, "**": [3, 7], ":.": [3, 5, 7], "4f": [3, 7], "}'": [3, 7], "score": [3, 7], "-'": 3, "finished": 3, "whole": 3, "{:": 3, "format": [3, 6], "(score": 3, "objective": 3, "':": [3, 5, 6, 9], "binary": 3, "boosting": 3, "gbdt": 3, "metric": 3, "_logloss": 3, "_rate": 3, "reg": 3, "_lambda": 3, ".,": [3, 6], "_alpha": 3, "max": [3, 5], "_depth": 3, "'n": 3, "_estimators": 3, "colsample": 3, "_bytree": 3, "min": 3, "_child": 3, "_samples": 3, "subsample": 3, "_freq": 3, "importance": 3, "_type": 3, "gain": 3, "_state": [3, 5, 9], ".model": [3, 5, 7, 9], "_selection": [3, 5], "kfold": 3, "fold": 3, "(n": [3, 7], "_splits": 3, "shuffle": [3, 7], "(fold": 3, ".split": [3, 5, 7], ".values": 3, "=params": 3, "[lightgbm": 3, "warning": 3, "=gbdt": 3, "will": [3, 6, 7], "ignored": 3, "current": [3, 5], "training": [3, 5], "until": 3, "validation": 3, "scores": 3, "don": 3, "improve": 3, "rounds": 3, "stopping": 3, "best": [3, 5, 6], "iteration": 3, "52": 3, "valid": [3, 5, 7], "65": 3, "60": 3, "24": 3, "69": 3, "visualize": [3, 5, 6], "_importance": 3, "(models": 3, "\"\"": [3, 5], "\u914d\u5217": 3, "feature": [3, 9], "cv\u3054": 3, "\u30d6\u30ec": 3, "boxen": 3, "\u8868\u73fe": [3, 7], "args": 3, "feat": 3, "\u4f7f\u3063": 3, "dataframe": 3, ".feature": 3, "_importances": 3, "_index": [3, 5, 6], "[['": 3, "]\\": 3, "sort": 3, "_values": 3, "ascending": 3, ").": [3, 5, 6, 7, 9], "index": [3, 5, 6], "[:": [3, 6, 7, 9], "(figsize": [3, 5, 7], "(order": 3, ".boxenplot": 3, "(data": [3, 5, 6, 7, 9], "=feature": 3, "=order": 3, "=ax": 3, "viridis": 3, "orient": 3, ".tick": 3, "_params": [3, 6], "(axis": 3, "rotation": 3, ".grid": [3, 6, 7], ".tight": 3, "_layout": 3, ".datasets": 3, "fetch": 3, "_california": 3, "_housing": 3, ", columns": 3, "=data": [3, 5], "_names": [3, 6], ")\ny": 3, "target": 3, "train": [3, 5, 7], "_split": [3, 5, 7], "_size": [3, 5, 6, 7], "_squared": [3, 7], "_error": [3, 7], ".lgbmregressor": 3, "rmse": 3, "\u3082\u3068\u3082": 3, "generator": 3, "\u306a\u305f\u3081": 3, "\u660e\u793a": 3, "\u5909\u63db": [3, 6, 7, 9], ".array": [3, 6, 9], "])": [3, 5, 6, 7], ".mean": 3, "(pred": [3, 6, 7], ".histplot": 3, "test": [3, 5, 6], "predict": [3, 6], "black": 3, "(oof": 3, "archive": 5, ".zip": [5, 6, 7], "\u2500\u2500": 5, "annotations": 5, "images": [5, 6], "unzip": [5, 6, 7], "!git": 5, "https": [5, 6, 7, 14], ":/": [5, 6, 7, 14], "github": [5, 7], ".com": [5, 6, 7, 14], "/ultralytics": [5, 6], "/yolov": [5, 6], "pip": [5, 6, 7, 9], "install": [5, 6, 7, 9], "qr": 5, "requirements": 5, ".txt": [5, 6], "cloning": 5, "into": 5, "remote": 5, "enumerating": 5, "objects": 5, "done": 5, "delta": 5, "reused": 5, "pack": 5, "-reused": 5, "receiving": 5, "mib": 5, "resolving": 5, "deltas": 5, "mb": [5, 6], "os": [5, 6, 7], "glob": [5, 6, 7], "datetime": [5, 6], "xml": 5, ".etree": 5, ".elementtree": 5, "et": 5, "cv2": 5, "_path": [5, 6], "'/": 5, "content": 5, "/annotations": 5, "file": [5, 6], "[]": 5, "width": [5, 6], "height": [5, 6], "xmin": [5, 6], "ymin": [5, 6], "xmax": [5, 6], "ymax": [5, 6], "anno": 5, ".glob": 5, "(annotations": 5, "+'": 5, "/*": [5, 6, 7], "tree": 5, ".parse": 5, "(anno": 5, "elem": 5, ".iter": 5, ".tag": 5, "attr": 5, "(elem": 5, "(round": 5, "(float": 5, "(attr": 5, ".text": [5, 6], "+=[": 5, "/'": [5, 6, 7], ")[": [5, 7], "][": [5, 6, 9], ":-": 5, "]]": [5, 6], "bndbox": 5, "dim": [5, 7, 9], "(dim": [5, 7], "(dataset": [5, 7], "maksssksksss": [5, 6], "_mask": [5, 6], ".title": 5, ".pie": 5, "labels": [5, 6], "=x": 5, "autopct": 5, "%.": 5, "1f": 5, "%%": 5, "_dict": [5, 6], "mask": [5, 6], "_weared": [5, 6], "_incorrect": [5, 6], "without": [5, 6], "class": [5, 6, 7, 9], "(name": 5, "filenames": 5, "[*": 5, ".listdir": 5, "/images": [5, 6], "(filenames": 5, "split": 5, "val": [5, 7], "(test": [5, 6], "length": 5, "(train": [5, 7], "(val": [5, 7], ".mkdir": 5, "./": [5, 7], "/val": 5, "/labels": 5, "pil": [5, 6, 7], "image": [5, 6, 7], "copyimages": 5, "(imagelist": 5, "folder": 5, "_name": [5, 6, 7, 9], "imagelist": 5, "img": [5, 6, 7], ".open": [5, 6, 7], ".resize": [5, 6, 7], "save": [5, 6], "(\"": [5, 6], "/\"": 5, ")*": 5, "[[": 5, "_center": 5, "box": [5, 6], "_height": 5, "_width": 5, ".astype": 5, "string": 5, "_labels": 5, "(image": [5, 6], "_list": 5, "[x": 5, ".'": 5, ".file": 5, "range": [5, 6, 7, 9], "(len": [5, 6, 7, 9], ".iloc": 5, "[index": 5, "(row": 5, "'+": 5, "text": [5, 6, 9], "'\\": 5, "'.": 5, "join": 5, "(box": [5, 6], "open": [5, 6], "txt": 5, "'w": [5, 6], ".write": 5, "(text": [5, 6], "%cd": 5, "/content": 5, "torch": [5, 6, 7, 9], "utils": 5, "yaml": 5, "_text": 5, "nc": 5, "names": [5, 6], "/data": 5, ".yaml": 5, "(yaml": 5, "%cat": 5, "[&": [5, 6, 7, 9], ";]": [5, 6, 7, 9], "start": [5, 6], ".now": [5, 6], ".py": [5, 6, 7], "batch": [5, 6, 7], "epochs": [5, 7], "weights": [5, 6, 9], "5s": 5, ".pt": [5, 6], "cache": [5, 6], "end": [5, 6], "=yolov": 5, "cfg": 5, "=,": 5, "hyp": 5, "/hyps": 5, "/hyp": 5, ".scratch": 5, "-low": 5, "imgsz": 5, "rect": 5, "resume": 5, "nosave": 5, "noval": 5, "noautoanchor": 5, "noplots": 5, "evolve": 5, "bucket": 5, "=ram": 5, "_weights": 5, "device": [5, 6, 7], "multi": 5, "_scale": 5, "single": 5, "_cls": 5, "optimizer": [5, 7], "=sgd": 5, "sync": 5, "_bn": 5, "workers": 5, "project": 5, "=runs": 5, "=exp": 5, "exist": 5, "_ok": 5, "quad": 5, "cos": 5, "_lr": [5, 7], "_smoothing": 5, "patience": 5, "freeze": 5, "_period": 5, "=-": [5, 7], "local": 5, "_rank": 5, "entity": 5, "upload": 5, "_dataset": 5, "bbox": 5, "_interval": 5, "artifact": 5, "_alias": 5, "=latest": 5, "up": 5, "date": 5, "v6": 5, "gd": 5, "1d": 5, "cu": 5, "cuda": [5, 7, 9], "tesla": 5, "hyperparameters": 5, "lr0": 5, "lrf": 5, "momentum": 5, "weight": [5, 7], "_decay": 5, "warmup": 5, "_epochs": [5, 7], "_momentum": 5, "_bias": 5, "cls": [5, 7, 9], "_pw": 5, "obj": 5, "iou": 5, "_t": [5, 7], "anchor": 5, "fl": 5, "_gamma": 5, "hsv": [5, 6], "_h": [5, 7], "_s": [5, 7], "_v": [5, 7], "degrees": 5, "translate": 5, "scale": 5, "shear": 5, "perspective": 5, "flipud": 5, "fliplr": 5, "mosaic": 5, "mixup": 5, "_paste": 5, "amp": 5, "biases": 5, "run": [5, 6, 7], "wandb": 5, "automatically": 5, "track": 5, "runs": 5, "recommended": 5, "tensorboard": 5, "logdir": 5, "view": 5, "at": [5, 7, 9], "http": 5, "localhost": 5, "downloading": 5, "ultralytics": [5, 6], "/assets": 5, "/arial": 5, ".ttf": 5, "root": 5, "/.": [5, 6], "config": 5, "3mb": 5, "releases": 5, "/download": 5, "/v": 5, "0m": 5, "overriding": 5, "module": 5, "arguments": 5, ".common": 5, ".conv": [5, 7], ".c": 5, ".sppf": 5, ".nn": [5, 7], ".modules": 5, ".upsampling": 5, ".upsample": 5, "nearest": 5, "[-": [5, 6], ".yolo": 5, ".detect": 5, "summary": [5, 6, 7], "layers": [5, 6], "parameters": [5, 6], "gradients": [5, 6], "gflops": [5, 6], "transferred": 5, "items": 5, "scaled": 5, "sgd": 5, "parameter": [5, 6], "groups": 5, "decay": 5, "bias": [5, 7], "albumentations": 5, "version": [5, 6, 9], "required": 5, "by": 5, "but": 5, "currently": 5, "installed": 5, "scanning": 5, ";/": 5, "found": [5, 6], "missing": 5, "empty": 5, "corrupt": 5, "new": 5, "created": 5, ".cache": 5, "caching": 5, "6gb": 5, "ram": 5, ";?": 5, ", ?": 5, "plotting": 5, "/exp": 5, ".jpg": 5, "autoanchor": 5, "anchors": 5, "/target": 5, "possible": 5, "recall": 5, "bpr": 5, "are": [5, 9], "good": 5, "sizes": 5, "using": [5, 6], "dataloader": 5, "logging": 5, "results": [5, 6], "starting": 5, "epoch": [5, 7], "gpu": 5, "_mem": 5, "/it": 5, "@.": 5, "]warning": 5, "nms": 5, "limit": 5, "exceeded": 5, "all": 5, "7g": 5, "completed": 5, "hours": 5, "stripped": 5, "/weights": 5, "/last": 5, "5mb": 5, "/best": 5, "validating": 5, "fusing": [5, 6], "saved": 5, "-start": [5, 6], "!python": 5, "detect": 5, "source": 5, "exptestimage": 5, "conf": 5, ", source": 5, "/,": 5, "/coco": 5, "_thres": 5, "_det": 5, "_img": 5, "_txt": 5, "_conf": 5, "_crop": 5, "classes": 5, "agnostic": 5, "_nms": 5, "augment": 5, "update": 5, "/detect": 5, "=exptestimage": 5, "line": 5, "_thickness": 5, "hide": 5, "half": 5, "dnn": 5, "gb": 5, "/maksssksksss": [5, 6], "png": [5, 6], "_masks": 5, "speed": 5, "5ms": 5, "pre": 5, "-process": 5, "0ms": 5, "inference": [5, 6], "6ms": 5, "per": 5, "shape": [5, 6, 7], "/exptestimage": 5, "show": 5, "_image": 5, "(img": [5, 6, 7], "_id": 5, "path": [5, 6, 7], ".imread": 5, "(path": [5, 6, 7], "imge": 5, ".copy": 5, "rectangle": 5, "(imge": 5, ", row": 5, "=color": [5, 6], "[row": 5, "thickness": 5, "+\"": 5, "\")": 5, ".subplot": 5, ".imshow": 5, ".axis": 5, "off": 5, "truth": 5, "predicted": 5, "clipping": 5, "imshow": 5, "rgb": [5, 6, 7], "..": [5, 6, 9], "floats": 5, "integers": 5, ".hub": [5, 6], ".load": [5, 6], "custom": [5, 6], "cpu": [5, 6, 7, 9], "/torch": [5, 6, 7], "/hub": [5, 6], "_yolov": [5, 6], "master": [5, 6], "pyyaml": 5, "&gt": 5, ";=": 5, "attempting": 5, "auto": 5, "-update": 5, "requirement": 5, "already": 5, "satisfied": 5, "usr": 5, "/local": 5, "/lib": 5, "/python": [5, 7], "dist": 5, "-packages": [5, 7], "package": 5, "updated": 5, "\u26a0\ufe0f": 5, "restart": 5, "rerun": 5, "command": 5, "updates": 5, "take": 5, "effect": 5, "adding": [5, 6], "autoshape": [5, 6], "paths": [5, 6, 7], "sorted": [5, 6, 7], "(glob": [5, 6, 7], "imgs": [5, 6], "(p": [5, 6], "(imgs": [5, 6], "(results": [5, 6], ".print": 5, "9ms": 5, "1ms": 5, ".xyxy": [5, 6], "zip": [5, 6], "(paths": [5, 6, 7], ".pandas": [5, 6], "xyxy": [5, 6], "[n": [5, 6], ".replace": [5, 6, 9], ", '": [5, 6, 9], "_[": 5, "df_": [5, 6, 9], ".reset": 5, "(drop": [5, 6], "confidence": [5, 6], "rows": [5, 6, 9], "##": [6, 7], "init": [6, 7, 9], "raw": 6, ".githubusercontent": 6, "/requirements": 6, "base": 6, "io": 6, "bytesio": 6, "imagedraw": 6, "imagefont": 6, ".onnx": 6, "onnxruntime": 6, "\u7528\u753b": 6, "_answer": 6, "\u8aad\u307f\u8fbc\u307f": 6, "\u30e2\u30c7\u30eb\u30b5\u30a4\u30ba": 6, ".path": 6, ".getsize": 6, "1e": [6, 7], "(model": [6, 7], ".training": 6, "users": 6, "/taichinakabeppu": 6, "[w": 6, "nnpack": 6, ".cpp": 6, "could": 6, "initialize": 6, "reason": 6, "unsupported": 6, "hardware": 6, "true": [6, 7], ".eval": [6, 7], ".no": [6, 7], "_grad": [6, 7], "\u30d0\u30c3\u30c1": [6, 7], "\u6240\u8981": 6, "\u6642\u9593": 6, "\u7d50\u679c": [6, 7], "\u683c\u7d0d": 6, "_.": 6, "insert": 6, ".drop": 6, "rename": 6, "(columns": 6, "={": 6, "'}": 6, "reset": 6, "capture": 6, "-d": 6, "fonts": 6, "then": 6, "mkdir": 6, "cd": 6, "wget": 6, "noto": 6, "-website": 6, "storage": 6, ".googleapis": 6, "/pkgs": 6, "/notosanscjkjp": 6, "-hinted": 6, "notosanscjkjp": 6, "fi": 6, "_results": 6, "threshold": 6, "cmap": 6, ".cm": 6, "_cmap": 6, "(class": 6, ".numpy": 6, "boxes": 6, "draw": 6, ".draw": 6, "font": 6, ".truetype": 6, "-bold": 6, ".otf": 6, "(boxes": 6, "(label": 6, "bytes": 6, ".rectangle": 6, "outline": 6, "[label": 6, "]+": 6, ", text": 6, "=font": 6, "white": 6, "_onnx": 6, "dummy": [6, 9], "_input": 6, ".randn": [6, 7], "requires": 6, ".export": 6, "being": 6, "tuple": 6, "multiple": 6, "inputs": [6, 9], "\",": 6, "where": 6, "store": 6, "trained": [6, 9], "inside": 6, "opset": 6, "_version": 6, "do": [6, 7], "_constant": 6, "_folding": 6, "whether": 6, "execute": 6, "constant": 6, "folding": 6, "'s": 6, "output": [6, 7], ", #": 6, "dynamic": 6, "_axes": 6, ":\"": 6, "\"}": 6, "checks": 6, "load": [6, 9], ".checker": 6, ".check": 6, "_model": [6, 7, 9], "metadata": 6, "{'": 6, "stride": [6, 7], ".stride": 6, ".names": 6, ".items": 6, "meta": 6, ".metadata": 6, "_props": 6, ".key": 6, ".value": 6, "str": [6, 7, 9], "(v": 6, ".save": 6, "has": 6, "been": 6, "converted": 6, "/users": 6, "/models": 6, "/yolo": 6, "tracerwarning": 6, "converting": 6, "tensor": 6, "boolean": 6, "might": 6, "cause": 6, "trace": 6, "incorrect": 6, "we": 6, "can": 6, "record": 6, "flow": 6, "so": 6, "this": [6, 7, 9], "treated": 6, "future": 6, "means": 6, "that": [6, 9], "generalize": 6, "other": 6, "self": [6, 9], "_dynamic": 6, "[i": 6, "!=": 6, "\u30b5\u30a4\u30ba": [6, 7], "(onnx": 6, "loading": 6, ".unique": 6, ", return": 6, "(array": 6, ", dtype": 6, "=object": 6, "array": 6, "convert": [6, 7], ".transpose": [6, 7], ".expand": 6, "_dims": 6, "session": 6, ".inferencesession": 6, ".run": 6, "(none": 6, "})": 6, "=float": 6, "(out": [6, 7, 9], ".rename": 6, "-maximun": 6, "suppression": 6, "\u5fc5\u8981": [6, 7], "_paths": 6, "files": 6, "buffered": 6, "(buffered": 6, "jpeg": 6, "_str": 6, "encode": 6, ".getvalue": 6, "decode": 6, "utf": 6, "(file": 6, "_images": 6, ".dumps": 6, ".json": 6, ".dump": 6, "(files": 6, "indent": 6, "_bytes": 6, ".encode": [6, 9], "_bytesio": 6, "(images": 6, "# p": 6, "[results": 6, ".iterrows": 6, "append": 6, "{&": 6, ";:": 6, "}]": 6, "(output": [6, 7], "\u66f8\u304d\u51fa\u3057": 6, "fp": 6, "ensure": 6, "_ascii": 6, "_file": 6, "=model": [6, 7], "_output": [6, 9], "main": 6, "complete": 6, "'__": 6, "\u539f\u8ad6\u6587": 7, "openreview": 7, ".net": 7, "/forum": 7, "?id": 7, "=yicbfdntty": 7, "\u5927\u304d\u304f": 7, "\u4ee5\u4e0b": 7, "\u3064\u306e": 7, "\u90e8\u5206": 7, "\u69cb\u6210": 7, "\u30af\u30e9\u30b9": 7, "\u5165\u529b": 7, "\u30d1\u30c3\u30c1": 7, "\u5206\u5272": 7, "\u30af\u30e9\u30b9\u30c8\u30fc\u30af\u30f3": 7, "\u30d9\u30af\u30c8\u30eb": [7, 9], "\u51fa\u529b": 7, "mlphead": 7, "\u306b\u5bfe\u3059\u308b": 7, "\u30e9\u30d9\u30eb": 7, "\u4e88\u6e2c": 7, "\u57cb\u3081\u8fbc\u307f": 7, "embedding": 7, "token": [7, 9], "\u4f4d\u7f6e": 7, "positional": 7, "\u8aac\u660e": 7, "\u305f\u3081": 7, "\u56f3\u89e3": 7, "nn": 7, ".functional": 7, "vitinputlayer": 7, "(nn": 7, ".module": 7, "_channels": 7, ":int": 7, "emb": 7, "_dim": 7, "nump": 7, "_patch": 7, "_row": 7, "super": 7, "(vitinputlayer": 7, ".in": 7, ".emb": 7, ".num": 7, ".image": 7, "\u306a\u3089": 7, "patch": 7, ".patch": 7, "(self": [7, 9], "_emb": 7, "_layer": 7, "2d": 7, "=self": 7, "kernel": 7, ".cls": 7, "_token": 7, ".parameter": 7, "(torch": 7, "position": 7, "\u5148\u982d": 7, "\u7d50\u5408": 7, "\u500b\u7528": 7, ".pos": 7, "forward": 7, ":torch": 7, ".tensor": [7, 9], "->": [7, 9], "flatten": 7, "(b": 7, "/p": 7, "*w": 7, "\u5165\u308c": 7, "\u66ff\u3048": 7, "transpose": 7, "# (": 7, ": n": 7, "\u306a\u306e\u3067": 7, "repeat": 7, "\u8907\u88fd": 7, "\uff09\u3057": 7, ".cat": 7, ".repeat": 7, "(repeats": 7, ".size": 7, ", z": 7, "_0": 7, "\u52a0\u7b97": 7, "check": 7, "\u60c5\u5831": 7, "\u62bd\u51fa": 7, "\u81ea\u5206": 7, "\u985e\u4f3c": 7, "\u6e2c\u5b9a": 7, "\u540c\u58eb": 7, "\u5185\u7a4d": 7, "\u985e\u4f3c\u5ea6": 7, "\u57fa\u3065\u3044": 7, "\u5408\u4f53": 7, "\u4fc2\u6570": 7, "\u52a0\u91cd": 7, "softmax": 7, "\u7b97\u51fa": 7, "\u52a0\u91cd\u548c": 7, "attention": [7, 9], "\u30a4\u30e1\u30fc\u30b8": 7, "\u3067\u3082": 7, "\u306b\u3088\u3063": 7, "\u884c\u3046": 7, "\u5f62\u5c64": 7, "\u7528\u610f": 7, "\u305d\u308c\u305e\u308c": 7, "\u7dda\u5f62": 7, "\u57cb\u3081\u8fbc\u3093": 7, "\u3042\u3068": 7, "\u3088\u3046": 7, "\u547c\u3076": 7, "query": 7, "key": 7, "\u3068\u3082\u306b": 7, "\u5168\u304f": 7, "\u540c\u3058": 7, "\u304b\u3089": 7, "\u7528\u3044": 7, "\u57cb\u3081\u8fbc\u307e": 7, "\u53d6\u308b": 7, "\u5206\u3051\u308b": 7, "\u52d5\u753b": 7, "\u30b5\u30a4\u30c8": 7, "\u691c\u7d22": 7, "\u4f8b\u3048\u308b": 7, "\u3068\u308f\u304b\u308a": 7, "\u3084\u3059\u3044": 7, "\u30ad\u30fc\u30ef\u30fc\u30c9": 7, "\u30bf\u30a4\u30c8\u30eb": 7, "\u4e00\u81f4\u5ea6": 7, "\u898b\u308b": 7, "\u540c\u69d8": 7, "\u8a08\u7b97": [7, 9], "\u305d\u306e": 7, "\u3082\u3068": 7, "\u884c\u5217\u7a4d": 7, "\u30bd\u30d5\u30c8\u30de\u30c3\u30af\u30b9": 7, "\u6b63\u898f": 7, "\u95a2\u4fc2": 7, "attension": 7, "\u4fdd\u6301": 7, "\u8907\u6570": 7, "\u3042\u308c": 7, "\u3060\u3051": 7, "\u3067\u304d\u308b": 7, "\u7372\u5f97": 7, "\u3059\u308c": 7, "\u826f\u3044": 7, "\u30cf\u30a4\u30d1\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf": 7, "\u30d8\u30c3\u30c9": 7, "\u6307\u5b9a": 7, "multiheadselfattention": 7, "head": 7, "dropout": 7, ":float": 7, ".)": 7, "(multiheadselfattention": 7, "\u4e8c\u4e57\u6839": 7, "\uff1aqk": 7, "^t": 7, "\u5272\u308b": 7, ".sqrt": 7, "_dh": 7, "\u57cb\u3081\u8fbc\u3080": 7, ".w": 7, "_q": 7, ".linear": 7, "(emb": 7, "_k": 7, ".attn": 7, "_drop": 7, ".dropout": 7, "(dropout": 7, "mhsa": 7, "_o": 7, ".sequential": 7, "num": 7, "= z": 7, ":(": 7, "(z": 7, "(q": 7, "\u307e\u305a": 7, "\u500b\u6570": 7, "//": 7, ".view": 7, "(batch": 7, "\u30d0\u30c3\u30c1\u30b5\u30a4\u30ba": 7, "\u30c8\u30fc\u30af\u30f3": 7, "\u5f62\u72b6": 7, "/h": 7, "dots": 7, "\u5217\u65b9\u5411": 7, "attn": 7, ".softmax": 7, "(dots": 7, "(attn": 7, ".reshape": 7, ".shape": 7, "layernormalization": 7, "mlp": 7, "\u6d3b\u6027": 7, "\u5316\u95a2": 7, "\uff1ageru": 7, "vitencoderblock": 7, "hidden": 7, "(vitencoderblock": 7, "\u3064\u76ee": 7, "layernorm": 7, ".ln1": 7, ".layernorm": [7, 9], ".msa": 7, "=emb": 7, "=head": 7, "=dropout": 7, ".ln2": 7, ".mlp": 7, ".gelu": 7, "(hidden": 7, "\u524d\u534a": 7, "\u5f8c\u534a": 7, "_enc": 7, "\u5168\u4f53\u50cf": 7, "_classes": 7, "_blocks": 7, "(vit": 7, ".input": 7, "\u591a\u6bb5": 7, ".encoder": 7, "=hidden": 7, "(num": 7, "_head": 7, "\uff09d": 7, "\u9577\u3055": 7, "\u629c\u304d\u51fa\u3059": 7, "(cls": 7, ".optim": 7, "adam": 7, ".optimizer": 7, ".utils": 7, "torchvision": 7, "transforms": 7, "scikit": 7, "-learn": 7, "seed": 7, "_torch": 7, "(seed": 7, ".seed": 7, ".environ": 7, "pythonhashseed": 7, ".manual": 7, "_seed": 7, ".cuda": [7, 9], ".backends": 7, ".cudnn": 7, ".deterministic": 7, ".device": [7, 9], ".is": [7, 9], "_available": [7, 9], "else": [7, 9], "dog": 7, "_cat": 7, "_filepaths": 7, "/dog": 7, "jpg": 7, "/cat": 7, "mydataset": 7, ".dataset": 7, ".paths": 7, ".transform": [7, 9], ".compose": 7, ".centercrop": 7, ".totensor": 7, ".normalize": 7, ".labels": 7, "getitem": 7, "_transformed": 7, "=paths": 7, "_val": 7, "- n": 7, "_loader": 7, ".dataloader": 7, "drop": 7, "_last": 7, "next": 7, "(iter": 7, ", torch": 7, ".train": 7, "criterion": 7, ".mseloss": 7, "\u56de\u5e30": 7, ".crossentropyloss": 7, "_loss": 7, "_accuracy": 7, ".to": [7, 9], "(device": 7, "=torch": [7, 9], "# y": 7, "reshape": 7, "(-": 7, ".int": 7, "loss": 7, ".zero": 7, ".backward": 7, ".argmax": 7, ".step": 7, "(valid": 7, "\u88dc\u8db3": 7, "\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9": 7, ".lr": 7, "_scheduler": 7, "steplr": 7, "cosineannealinglr": 7, "exponentiallr": 7, "=.": 7, ".parameters": 7, ", lr": 7, "schedulers": 7, "lambda": 7, "optim": 7, "(optim": 7, "\u534a\u5468\u671f": 7, "cosine": 7, "step": 7, "gamma": 7, "\u3054\u3068": 7, "(range": 7, "get": 7, "rates": 7, "sche": 7, "(adam": 7, "(sche": 7, "(epochs": 7, "=type": 7, "_yscale": 7, "/anaconda": 7, "/envs": 7, "/azureml": 7, "_py": 7, "lib": 7, "site": 7, "/optim": 7, "/lr": 7, "userwarning": 7, "detected": 7, "call": 7, "lr": 7, "before": 7, "`.": 7, "later": 7, "you": [7, 9], "should": 7, "them": 7, "opposite": 7, "failure": 7, "result": [7, 9], "skipping": 7, "first": 7, "schedule": 7, "see": 7, "more": 7, "details": 7, ".org": 7, "/docs": 7, "/stable": 7, ".html": 7, "#how": 7, "-to": 7, "-adjust": 7, "-learning": 7, "-rate": 7, ".warn": 7, "(&": 7, "_fold": 7, ".ndarray": 7, "scheduler": 7, "(optimizer": 7, "eta": 7, "_min": 7, "'epoch": 7, "_acc": 7, "=valid": 7, "'score": 7, "3f": 7, "=vit": 7, "=train": 7, "=val": 7, "\u6027\u80fd": 7, "\u6539\u5584": [7, 9], "dataaugmentation": 7, "\u30d5\u30a1\u30a4\u30f3\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0": 7, "/rwightman": 7, "/pytorch": 7, "-image": 7, "-models": 7, "torchvisionmodels": 7, "\u3042\u308b": 7, "timm": 7, "available": 7, ".list": 7, "_models": 7, "*'": 7, "_base": 7, "dino": 7, "miil": 7, "_in": 7, "sam": 7, "plus": 7, "rpn": 7, "clip": 7, "_laion": 7, "2b": 7, "_r": 7, "_resnet": 7, "_giant": 7, "_gigantic": 7, "_huge": 7, "_large": 7, "_relpos": 7, "clsgap": 7, "_rpn": 7, "_medium": 7, "_small": 7, "_srelpos": 7, "_tiny": 7, "\u30d9\u30fc\u30b9\u30e2\u30c7\u30eb": 7, ".create": 7, "pretrained": 7, "param": 7, ".requires": 7, "\u30bf\u30b9\u30af": [7, 9], "\u5408\u308f\u305b": 7, "\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3": 7, "\u5909\u66f4": 7, "_features": 7, "linear": 7, "(in": 7, "\u66f4\u65b0": 7, "\u30d1\u30e9\u30e1\u30fc\u30bf": 7, "torchsummary": 7, "vitbased": 7, "(vitbased": 7, "transformers": 9, "berttokenizer": 9, "japanize": 9, "_matplotlib": 9, ".cluster": 9, "kmeans": 9, "\u7ffb\u8a33": 9, "\u304a\u3044": 9, "seq": 9, "2seq": 9, "(rnn": 9, "\u30d9\u30fc\u30b9": 9, "encoder": 9, "-decoder": 9, "\u3088\u308a": 9, "\u65e9\u304f": 9, "\u7cbe\u5ea6": 9, "\u9ad8\u3044": 9, "\u3002'": 9, "rnn": 9, "cnn": 9, "\u4f7f\u308f": 9, "-decoder\u30e2\u30c7": 9, "cleaning": 9, "u3": 9, "''": 9, "replace": 9, "\u25a0'": 9, "\u3010'": 9, "\u3011'": 9, "message": 9, "massage": 9, "aaply": 9, "(lambda": 9, "bertsequencevectorizer": 9, "cl": 9, "-tohoku": 9, "/bert": 9, "-base": 9, "-japanese": 9, ".tokenizer": 9, ".from": 9, "_pretrained": 9, ".bert": 9, ".bertmodel": 9, ".max": 9, "_len": 9, "vectorize": 9, "sentence": 9, "inp": 9, "(sentence": 9, "_inp": 9, "(inp": 9, "masks": 9, "* (": 9, "_tensor": 9, ".long": 9, "_out": 9, "(inputs": 9, "pooled": 9, "last": 9, "_hidden": 9, ", bert": 9, "pooler": 9, "detach": 9, "\u756a\u76ee": 9, "\u6587\u7ae0": 9, "_bert": 9, "(col": 9, ":str": 9, ")-": 9, "bsv": 9, "description": 9, "[col": 9, "apply": 9, ".vectorize": 9, "\u5b9f\u884c": 9, "tokenizer": 9, "checkpoint": 9, "same": 9, "function": 9, "called": 9, "unexpected": 9, "tokenization": 9, "bertjapanesetokenizer": 9, "some": 9, "were": 9, "used": 9, "when": 9, "initializing": 9, "bertmodel": 9, ".predictions": 9, ".dense": 9, ".weight": 9, ".bias": 9, ".decoder": 9, ".seq": 9, "_relationship": 9, "expected": 9, "on": 9, "another": 9, "task": 9, "architecture": 9, ".g": 9, "bertforsequenceclassification": 9, "bertforpretraining": 9, "expect": 9, "exactly": 9, "identical": 9, "\u30ea\u30b9\u30c8": 9, "\u884c\u5217": 9, "_matrix": 9, "(feature": 9, ":pd": 9, ".t": 9, "developers": 14, ".google": 14, "/optimization": 14, "/introduction": 14, "/overview": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"documents": 0, "nakabeppu": 0, "contents": 0, "python": 1, "machine": 2, "learning": [2, 12], "\u57fa\u790e": 3, "\u30c7\u30fc\u30bf": [3, 5], "\u53ef\u8996": 3, "\u51e6\u7406": 3, "\u9023\u7d9a": 3, "\u5909\u6570": 3, "numeric": 3, "\u30ab\u30c6\u30b4\u30ea": 3, "\u30ab\u30e9\u30e0": 3, "countencoding": 3, "onehotencoding": 3, "\u7279\u5fb4": [3, 9], "\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0": [3, 9], "\u95a2\u6570": 3, "model": [3, 6], "classification": 3, "regression": 3, "computer": 4, "vision": [4, 7], "yolov": 5, "data": 5, "git": 5, "clone": 5, "\u524d\u51e6": 5, "\u30e2\u30c7\u30eb": [5, 7], "\u69cb\u7bc9": 5, "\u5b66\u7fd2": [5, 7], "\u63a8\u8ad6": 5, "\u53ef\u8996\u5316": 5, "yolo": 6, "to": 6, "onnx": 6, "prediction": 6, "with": 6, "pytorch": 6, "export": 6, "runtime": 6, "transformer": 7, "\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0": 7, "\u7406\u89e3": 7, "input": 7, "layer": 7, "encoder": 7, "self": 7, "-attention": 7, "\u81ea\u5df1": 7, "\u6ce8\u610f": 7, "multi": 7, "-head": 7, "block": 7, "vit": 7, "\u5168\u4f53": 7, "\u72ac\u732b": 7, "\u753b\u50cf": 7, "\u5206\u985e": 7, "\u8a66\u3057": 7, "\u4e8b\u524d": 7, "\u6e08\u307f": 7, "\u6d3b\u7528": 7, "natural": 8, "language": 8, "processing": 8, "bert": 9, "\u306b\u3088\u308b": 9, "time": 10, "seriese": 10, "adversarial": 11, "reinforcement": 12, "optimization": 13, "or": 14, "-tools": 14, "miscellaneous": 15}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "nbsphinx": 4, "sphinx": 57}, "alltitles": {"documents : nakabeppu": [[0, "documents-nakabeppu"]], "Contents:": [[0, null]], "\u30fc 0. Python \u30fc": [[1, "\u30fc-0.-Python-\u30fc"]], "\u30fc 1. Machine Learning \u30fc": [[2, "\u30fc-1.-Machine-Learning-\u30fc"]], "\u57fa\u790e": [[3, "\u57fa\u790e"]], "\u30c7\u30fc\u30bf\u53ef\u8996\u5316": [[3, "\u30c7\u30fc\u30bf\u53ef\u8996\u5316"]], "\u524d\u51e6\u7406": [[3, "\u524d\u51e6\u7406"]], "\u9023\u7d9a\u5909\u6570 (Numeric)": [[3, "\u9023\u7d9a\u5909\u6570-(Numeric)"]], "\u30ab\u30c6\u30b4\u30ea\u7cfb\u306e\u30ab\u30e9\u30e0": [[3, "\u30ab\u30c6\u30b4\u30ea\u7cfb\u306e\u30ab\u30e9\u30e0"]], "CountEncoding": [[3, "CountEncoding"]], "OneHotEncoding": [[3, "OneHotEncoding"]], "\u524d\u51e6\u7406\uff08\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\uff09\u3092\u95a2\u6570\u5316": [[3, "\u524d\u51e6\u7406\uff08\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\uff09\u3092\u95a2\u6570\u5316"]], "Model : Classification": [[3, "Model-:-Classification"]], "Model : Regression": [[3, "Model-:-Regression"]], "\u30fc 2. Computer Vision \u30fc": [[4, "\u30fc-2.-Computer-Vision-\u30fc"]], "YOLOV5": [[5, "YOLOV5"]], "data": [[5, "data"]], "Git Clone": [[5, "Git-Clone"]], "\u30c7\u30fc\u30bf\u306e\u524d\u51e6\u7406": [[5, "\u30c7\u30fc\u30bf\u306e\u524d\u51e6\u7406"]], "\u30e2\u30c7\u30eb\u69cb\u7bc9": [[5, "\u30e2\u30c7\u30eb\u69cb\u7bc9"]], "\u5b66\u7fd2": [[5, "\u5b66\u7fd2"]], "\u63a8\u8ad6": [[5, "\u63a8\u8ad6"]], "\u53ef\u8996\u5316": [[5, "\u53ef\u8996\u5316"]], "YOLO to ONNX": [[6, "YOLO-to-ONNX"]], "Prediction with PyTorch": [[6, "Prediction-with-PyTorch"]], "Export ONNX": [[6, "Export-ONNX"]], "Prediction with ONNX Model": [[6, "Prediction-with-ONNX-Model"]], "ONNX Runtime": [[6, "ONNX-Runtime"]], "Vision Transformer": [[7, "Vision-Transformer"]], "\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u7406\u89e3": [[7, "\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u7406\u89e3"]], "Input Layer": [[7, "Input-Layer"]], "Encoder": [[7, "Encoder"]], "Self-Attention\uff08\u81ea\u5df1\u6ce8\u610f\uff09": [[7, "Self-Attention\uff08\u81ea\u5df1\u6ce8\u610f\uff09"]], "Multi-Head Self-Attention": [[7, "Multi-Head-Self-Attention"]], "Encoder Block": [[7, "Encoder-Block"]], "ViT \u5168\u4f53": [[7, "ViT-\u5168\u4f53"]], "\u72ac\u732b\u753b\u50cf\u5206\u985e\u3092\u8a66\u3057": [[7, "\u72ac\u732b\u753b\u50cf\u5206\u985e\u3092\u8a66\u3057"]], "\u4e8b\u524d\u5b66\u7fd2\u6e08\u307f\u30e2\u30c7\u30eb\u306e\u6d3b\u7528": [[7, "\u4e8b\u524d\u5b66\u7fd2\u6e08\u307f\u30e2\u30c7\u30eb\u306e\u6d3b\u7528"]], "\u30fc 3. Natural Language Processing \u30fc": [[8, "\u30fc-3.-Natural-Language-Processing-\u30fc"]], "BERT \u306b\u3088\u308b\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0": [[9, "BERT-\u306b\u3088\u308b\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0"]], "\u30fc 4. Time Seriese \u30fc": [[10, "\u30fc-4.-Time-Seriese-\u30fc"]], "\u30fc 5. Adversarial \u30fc": [[11, "\u30fc-5.-Adversarial-\u30fc"]], "\u30fc 6. Reinforcement Learning \u30fc": [[12, "\u30fc-6.-Reinforcement-Learning-\u30fc"]], "\u30fc 7. Optimization \u30fc": [[13, "\u30fc-7.-Optimization-\u30fc"]], "OR-Tools": [[14, "OR-Tools"]], "\u30fc 99. Miscellaneous \u30fc": [[15, "\u30fc-99.-Miscellaneous-\u30fc"]]}, "indexentries": {}})