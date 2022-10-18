import 'package:flutter/material.dart';
import 'package:foo_project/StyleDictionaryColors.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    Color mainColor = StyleDictionaryColors.colorGreen;
    Map<int, Color> colors = {
      50: mainColor.withOpacity(.1),
      100: mainColor.withOpacity(.2),
      200: mainColor.withOpacity(.3),
      300: mainColor.withOpacity(.4),
      400: mainColor.withOpacity(.5),
      500: mainColor.withOpacity(.6),
      600: mainColor.withOpacity(.7),
      700: mainColor.withOpacity(.8),
      800: mainColor.withOpacity(.9),
      900: mainColor.withOpacity(1),
    };

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: MaterialColor(mainColor.value, colors),
        backgroundColor: StyleDictionaryColors.colorYellow,
        scaffoldBackgroundColor: StyleDictionaryColors.colorYellow,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
